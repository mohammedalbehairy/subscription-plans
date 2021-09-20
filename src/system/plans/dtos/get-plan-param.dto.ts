import { IsString, IsUUID } from 'class-validator';

export class GetPlanParamsDto {
  @IsString()
  @IsUUID(4)
  id: string;
}
