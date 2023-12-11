import { Module } from '@nestjs/common';
import { SubActivityService } from './sub-activity.service';
import { SubActivityController } from './sub-activity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [SubActivityController],
  providers: [SubActivityService, PrismaService],
})
export class SubActivityModule {}
