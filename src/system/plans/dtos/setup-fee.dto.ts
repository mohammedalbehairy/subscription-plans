import { IsInt, IsString } from 'class-validator';

export class SetupFeeDto {
  @IsInt()
  amount: number;

  @IsString()
  accountCode: string;
}
