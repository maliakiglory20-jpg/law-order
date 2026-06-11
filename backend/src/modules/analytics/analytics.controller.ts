import { Controller, Get, Query, UseGuards, Request, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles, Public } from '../../common/decorators/roles.decorator';

@ApiTags('Analytics')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get user dashboard analytics' })
  getUserDashboard(@Request() req: any) {
    return this.analyticsService.getUserDashboard(req.user.id);
  }

  @Get('admin')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get admin dashboard analytics' })
  getAdminDashboard() {
    return this.analyticsService.getAdminDashboard();
  }

  @Get('progress')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get user progress report' })
  getProgressReport(@Request() req: any) {
    return this.analyticsService.getUserProgressReport(req.user.id);
  }

  @Public()
  @Get('leaderboard')
  @ApiOperation({ summary: 'Get leaderboard' })
  getLeaderboard(@Query('limit') limit: number) {
    return this.analyticsService.getLeaderboard(limit);
  }
}
