import { IsEnum, IsInt, IsNumber, IsString } from 'class-validator';
import { PeriodKey } from 'src/core/enums/period-key';

export class BillingPeriodDto {
  @IsInt()
  count: number;

  @IsEnum(PeriodKey)
  periodKey: PeriodKey;

  @IsNumber()
  price: number;

  @IsString()
  accountCode: string;
}
