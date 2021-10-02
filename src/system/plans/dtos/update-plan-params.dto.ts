import { IsString } from 'class-validator';

export class UpdatePlanParamsDto {
  @IsString()
  id: string;
}
