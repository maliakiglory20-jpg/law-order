import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../../common/decorators/roles.decorator';

@ApiTags('Documents')
@UseGuards(JwtAuthGuard)
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Public()
  @Get('case/:caseId')
  @ApiOperation({ summary: 'Get documents for a case' })
  findByCaseId(@Param('caseId') caseId: string) {
    return this.documentsService.findByCaseId(caseId);
  }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Add document to case' })
  create(@Body() body: any, @Request() req: any) {
    return this.documentsService.create({ ...body, uploadedBy: req.user.id });
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete document' })
  delete(@Param('id') id: string) {
    return this.documentsService.delete(id);
  }
}
