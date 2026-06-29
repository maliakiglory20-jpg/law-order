import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3001);
  const frontendUrl = configService.get<string>('FRONTEND_URL', 'http://localhost:3000');

  // Security
  app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        scriptSrc: ["'self'"],
      },
    },
  }));

  // CORS
  // Allowed origins come from defaults + FRONTEND_URL + a comma-separated
  // CORS_ORIGINS env var, and any *.vercel.app deployment is also permitted.
  const configuredOrigins = (configService.get<string>('CORS_ORIGINS', '') || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  const allowedOrigins = new Set<string>([
    frontendUrl,
    'http://localhost:3000',
    'http://localhost:3001',
    ...configuredOrigins,
  ]);
  const isVercelOrigin = (origin: string): boolean => {
    try {
      return /\.vercel\.app$/.test(new URL(origin).hostname);
    } catch {
      // Malformed Origin header — treat as not allowed rather than throwing.
      return false;
    }
  };
  app.enableCors({
    origin: (origin, callback) => {
      // Allow non-browser clients (no origin) and any configured/Vercel origin.
      if (!origin || allowedOrigins.has(origin) || isVercelOrigin(origin)) {
        return callback(null, true);
      }
      // Deny without throwing: the browser blocks the response (no
      // Access-Control-Allow-Origin header) while the server still replies
      // normally. Returning an Error here would surface as a 500 for every
      // disallowed/malformed Origin.
      return callback(null, false);
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
  });

  // Global prefix
  app.setGlobalPrefix('api/v1');

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Litigation Learning Platform API')
    .setDescription('Enterprise-grade Litigation Learning & Case Review Management System')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .addTag('Auth', 'Authentication endpoints')
    .addTag('Users', 'User management endpoints')
    .addTag('Litigation', 'Litigation types endpoints')
    .addTag('Cases', 'Case management endpoints')
    .addTag('Documents', 'Document management endpoints')
    .addTag('Quiz', 'Quiz and assessment endpoints')
    .addTag('Analytics', 'Analytics and reporting endpoints')
    .addTag('Search', 'Full-text search endpoints')
    .addTag('AI', 'AI-powered features endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port, '0.0.0.0');
  logger.log(`Application running on: http://localhost:${port}`);
  logger.log(`Swagger docs available at: http://localhost:${port}/api/docs`);
  logger.log(`Environment: ${configService.get('NODE_ENV', 'development')}`);
}

bootstrap();
