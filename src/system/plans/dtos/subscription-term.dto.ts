import { Transform } from 'class-transformer';
import { IsBoolean, IsInt } from 'class-validator';

export class SubscriptionTermDto {
  @IsInt()
  count: number;

  @IsBoolean()
  @Transform((value: any) => {
    if (value.value == true || value.value == 'true') return true;
    else return false;
  })
  autoRenew: boolean;
}
