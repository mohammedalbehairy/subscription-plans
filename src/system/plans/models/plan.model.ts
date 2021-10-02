import { SetupFeeSchema } from './setup-fee.model';
import { ISetupFee } from './../../../core/interfaces/setup-fee';
import { SubscriptionTermSchema } from './subscription-term.model';
import { BillingPeriodSchema } from './billing-period.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import { FreeTrialSchema } from './free-trial.model';
import { IBillingPeriod } from 'src/core/interfaces/billing-period';
import { ISubscriptionTerm } from 'src/core/interfaces/subscription-term';
import { IFreeTrial } from 'src/core/interfaces/free-trial';

@Schema({ versionKey: false })
export class Plan {
  @Prop({
    default: () => {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({ required: true })
  merchantId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: BillingPeriodSchema, default: undefined })
  billingPeriod: IBillingPeriod;

  @Prop({ type: SubscriptionTermSchema, default: undefined })
  subscriptionTerm: ISubscriptionTerm;

  @Prop({ type: FreeTrialSchema, default: {} })
  freeTrial: IFreeTrial;

  @Prop({ type: SetupFeeSchema, default: undefined })
  setupFee: ISetupFee;

  @Prop({ default: true })
  isActive: string;

  @Prop({ default: false })
  isDeleted: string;

  @Prop({ default: () => moment().utc().format() })
  createdAt: string;

  @Prop({ default: () => moment().utc().format() })
  updatedAt: string;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
export type PlanDocument = Plan & Document;
