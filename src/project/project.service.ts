import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prismaService.project.create({
      data: createProjectDto as any,
    });
  }

  findAll() {
    return this.prismaService.project.findMany({
      include: {
        activities: {
          include: {
            subActivities: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return this.prismaService.project.delete({ where: { id } });
  }
}
