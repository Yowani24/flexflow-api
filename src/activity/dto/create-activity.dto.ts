import { CreateSubActivityDto } from 'src/sub-activity/dto/create-sub-activity.dto';

export class CreateActivityDto {
  name: string;
  percentage: number;
  userName: string;
  userEmail: string;
  start: Date;
  end: Date;
  status: string;
  projectId: number;
  subActivities?: CreateSubActivityDto[];
}
