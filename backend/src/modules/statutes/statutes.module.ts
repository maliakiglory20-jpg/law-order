import { Module } from '@nestjs/common';
import { StatutesController } from './statutes.controller';
import { StatutesService } from './statutes.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [StatutesController],
  providers: [StatutesService, PrismaService],
  exports: [StatutesService],
})
export class StatutesModule {}
