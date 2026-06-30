import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GlossaryService } from './glossary.service';
import { Public } from '../../common/decorators/roles.decorator';

@ApiTags('Glossary')
@Controller('glossary')
export class GlossaryController {
  constructor(private readonly glossaryService: GlossaryService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get glossary terms (search, category, letter, difficulty, essential filters)' })
  findAll(
    @Query()
    query: {
      search?: string;
      category?: string;
      letter?: string;
      difficulty?: string;
      essential?: string;
      page?: number;
      limit?: number;
    },
  ) {
    return this.glossaryService.findAll(query);
  }

  @Public()
  @Get('categories')
  @ApiOperation({ summary: 'Get glossary categories with term counts' })
  getCategories() {
    return this.glossaryService.getCategories();
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get a glossary term by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.glossaryService.findBySlug(slug);
  }
}
