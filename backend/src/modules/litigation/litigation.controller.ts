import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LitigationService } from './litigation.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles, Public } from '../../common/decorators/roles.decorator';

@ApiTags('Litigation')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('litigation')
export class LitigationController {
  constructor(private readonly litigationService: LitigationService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all litigation types' })
  findAll(@Query() query: { category?: string; search?: string; page?: number; limit?: number }) {
    return this.litigationService.findAll(query);
  }

  @Public()
  @Get('categories')
  @ApiOperation({ summary: 'Get all categories' })
  getCategories() {
    return this.litigationService.getCategories();
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get litigation type by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.litigationService.findBySlug(slug);
  }

  @Post()
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Create litigation type (admin)' })
  create(@Body() body: any) {
    return this.litigationService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Update litigation type (admin)' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.litigationService.update(id, body);
  }

  @Delete(':id')
  @Roles('SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete litigation type (super admin)' })
  delete(@Param('id') id: string) {
    return this.litigationService.delete(id);
  }
}
