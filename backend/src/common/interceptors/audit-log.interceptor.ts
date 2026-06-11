import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuditLogInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuditLogInterceptor.name);

  constructor(private readonly prisma: PrismaService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, user, ip, headers } = request;

    const mutatingMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    if (!mutatingMethods.includes(method)) {
      return next.handle();
    }

    const startTime = Date.now();

    return next.handle().pipe(
      tap(async (data) => {
        try {
          const duration = Date.now() - startTime;
          const urlParts = url.split('/').filter(Boolean);
          const resource = urlParts[2] || 'unknown'; // /api/v1/{resource}/...
          const resourceId = urlParts[3] || null;

          await this.prisma.auditLog.create({
            data: {
              userId: user?.id || null,
              action: method,
              resource,
              resourceId,
              ipAddress: ip,
              userAgent: headers['user-agent'],
              metadata: {
                url,
                duration,
                statusCode: 200,
              },
            },
          });
        } catch (error) {
          this.logger.error('Failed to create audit log', error);
        }
      }),
    );
  }
}
