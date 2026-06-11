import { Module } from '@nestjs/common';
import { LitigationController } from './litigation.controller';
import { LitigationService } from './litigation.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [LitigationController],
  providers: [LitigationService, PrismaService],
  exports: [LitigationService],
})
export class LitigationModule {}
