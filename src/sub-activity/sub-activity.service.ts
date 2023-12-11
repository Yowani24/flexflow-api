import { Injectable } from '@nestjs/common';
import { CreateSubActivityDto } from './dto/create-sub-activity.dto';
import { UpdateSubActivityDto } from './dto/update-sub-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubActivityService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createSubActivityDto: CreateSubActivityDto) {
    return this.prismaService.subActivity.create({
      data: createSubActivityDto as any,
    });
  }

  findAll() {
    return this.prismaService.subActivity.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} subActivity`;
  }

  update(id: number, updateSubActivityDto: UpdateSubActivityDto) {
    return this.prismaService.subActivity.update({
      where: { id },
      data: updateSubActivityDto as any,
    });
  }

  remove(id: number) {
    return this.prismaService.subActivity.delete({ where: { id } });
  }
}
