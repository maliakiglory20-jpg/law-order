import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { QuizService } from './quiz.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles, Public } from '../../common/decorators/roles.decorator';

@ApiTags('Quiz')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all quizzes' })
  findAll(@Query() query: any) {
    return this.quizService.findAll(query);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get quiz by ID' })
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(id);
  }

  @Get('attempts/me')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get my quiz attempts' })
  getMyAttempts(@Request() req: any, @Query('quizId') quizId?: string) {
    return this.quizService.getUserAttempts(req.user.id, quizId);
  }

  @Post(':id/submit')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Submit quiz attempt' })
  submit(@Param('id') id: string, @Request() req: any, @Body() body: { answers: any[]; timeTaken?: number }) {
    return this.quizService.submitAttempt(id, req.user.id, body.answers, body.timeTaken);
  }

  @Post()
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any, 'REVIEWER' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Create quiz' })
  create(@Body() body: any, @Request() req: any) {
    return this.quizService.create(body, req.user.id);
  }

  @Put(':id')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any, 'REVIEWER' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Update quiz' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.quizService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete quiz' })
  delete(@Param('id') id: string) {
    return this.quizService.delete(id);
  }
}
