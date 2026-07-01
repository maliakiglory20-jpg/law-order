import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StatutesService } from './statutes.service';
import { Public } from '../../common/decorators/roles.decorator';

@ApiTags('Statutes')
@Controller('statutes')
export class StatutesController {
  constructor(private readonly statutesService: StatutesService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get statutes (search, category, jurisdiction, litigation filters)' })
  findAll(
    @Query()
    query: {
      search?: string;
      category?: string;
      jurisdiction?: string;
      litigation?: string;
      page?: number;
      limit?: number;
    },
  ) {
    return this.statutesService.findAll(query);
  }

  @Public()
  @Get('categories')
  @ApiOperation({ summary: 'Get statute categories with counts' })
  getCategories() {
    return this.statutesService.getCategories();
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get a statute by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.statutesService.findBySlug(slug);
  }
}
