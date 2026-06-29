import { Module } from '@nestjs/common';
import { GlossaryController } from './glossary.controller';
import { GlossaryService } from './glossary.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [GlossaryController],
  providers: [GlossaryService, PrismaService],
  exports: [GlossaryService],
})
export class GlossaryModule {}
