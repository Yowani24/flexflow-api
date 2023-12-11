import { PartialType } from '@nestjs/mapped-types';
import { CreateSubActivityDto } from './create-sub-activity.dto';

export class UpdateSubActivityDto extends PartialType(CreateSubActivityDto) {
  id?: number;
  name?: string;
  status?: string;
}
