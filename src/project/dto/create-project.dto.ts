import { CreateActivityDto } from 'src/activity/dto/create-activity.dto';

export class CreateProjectDto {
  name: string;
  attachment?: string;
  userCreated?: string;
  userCreatedEmail?: string;
  activities?: CreateActivityDto[];
}
