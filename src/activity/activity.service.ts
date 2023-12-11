import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createActivityDto: CreateActivityDto) {
    return this.prismaService.activity.create({
      data: createActivityDto as any,
    });
  }

  findAll() {
    return this.prismaService.activity.findMany({
      include: { subActivities: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.prismaService.activity.update({
      where: { id },
      data: updateActivityDto as any,
    });
  }

  remove(id: number) {
    return this.prismaService.activity.delete({
      where: { id },
      include: { subActivities: true },
    });
  }
}
