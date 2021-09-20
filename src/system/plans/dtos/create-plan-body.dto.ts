import { SubscriptionTermDto } from './subscription-term.dto';
import { Type } from 'class-transformer';
import { FreeTrialDto } from './free-trial.dto';
import { IsString } from 'class-validator';
import { BillingPeriodDto } from './billing-period.dto';

export class CreatePlanBodyDto {
  @IsString()
  title: string;

  @IsString()
  code: string;

  @IsString()
  description: string;

  @Type(() => BillingPeriodDto)
  billingPeriod: BillingPeriodDto;

  @Type(() => SubscriptionTermDto)
  subscriptionTerm: SubscriptionTermDto;

  @Type(() => FreeTrialDto)
  freeTrial: FreeTrialDto;
}
