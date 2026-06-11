import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Full-text search across cases, litigation types, and quizzes' })
  search(
    @Query('q') q: string,
    @Query('type') type?: string,
    @Query('jurisdiction') jurisdiction?: string,
    @Query('year') year?: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.searchService.search(q || '', { type, jurisdiction, year }, page, limit);
  }

  @Get('suggest')
  @ApiOperation({ summary: 'Get search suggestions' })
  suggest(@Query('q') q: string) {
    return this.searchService.suggest(q || '');
  }
}
