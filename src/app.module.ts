import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';
import { ActivityModule } from './activity/activity.module';
import { SubActivityModule } from './sub-activity/sub-activity.module';

@Module({
  imports: [PrismaModule, ProjectModule, ActivityModule, SubActivityModule],
})
export class AppModule {}
