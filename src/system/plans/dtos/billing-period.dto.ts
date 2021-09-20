import { IsEnum, IsInt, IsNumber } from 'class-validator';
import { PeriodKey } from 'src/core/enums/period-key';

export class BillingPeriodDto {
  @IsInt()
  count: number;

  @IsEnum(PeriodKey)
  periodKey: string;

  @IsNumber()
  price: number;
}
