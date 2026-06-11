import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CasesService } from './cases.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles, Public } from '../../common/decorators/roles.decorator';

@ApiTags('Cases')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all cases with filters' })
  findAll(@Query() query: any) {
    return this.casesService.findAll(query);
  }

  @Public()
  @Get('featured')
  @ApiOperation({ summary: 'Get featured cases' })
  getFeatured(@Query('limit') limit: number) {
    return this.casesService.getFeaturedCases(limit);
  }

  @Get('bookmarks')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get user bookmarks' })
  getBookmarks(@Request() req: any, @Query() query: { page?: number; limit?: number }) {
    return this.casesService.getUserBookmarks(req.user.id, query.page, query.limit);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get case by ID' })
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.casesService.findOne(id, req.user?.id);
  }

  @Post()
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any, 'REVIEWER' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Create case' })
  create(@Body() body: any) {
    return this.casesService.create(body);
  }

  @Put(':id')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any, 'REVIEWER' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Update case' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.casesService.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN' as any, 'SUPER_ADMIN' as any)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete case' })
  delete(@Param('id') id: string) {
    return this.casesService.delete(id);
  }

  @Post(':id/bookmark')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Toggle bookmark on case' })
  toggleBookmark(@Param('id') id: string, @Request() req: any) {
    return this.casesService.toggleBookmark(req.user.id, id);
  }

  @Post(':id/notes')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Save note on case' })
  saveNote(@Param('id') id: string, @Request() req: any, @Body() body: { content: string }) {
    return this.casesService.saveNote(req.user.id, id, body.content);
  }
}
