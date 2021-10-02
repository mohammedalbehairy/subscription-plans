import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsInt } from 'class-validator';
import { PeriodKey } from 'src/core/enums/period-key';

export class FreeTrialDto {
  @IsInt()
  count: number;

  @IsEnum(PeriodKey)
  periodKey: PeriodKey;

  @IsBoolean()
  @Transform((value: any) => {
    if (value.value == true || value.value == 'true') return true;
    else return false;
  })
  isActive: boolean;
}
