import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  id?: number;
  name?: string;
  percentage?: number;
  userName?: string;
  start?: Date;
  end?: Date;
  status?: string;
}
