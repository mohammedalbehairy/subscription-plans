import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PeriodKey } from 'src/core/enums/period-key';

@Schema()
export class BillingPeriod extends Document {
  @Prop({ required: true })
  count: number;

  @Prop({
    required: true,
    type: String,
    enum: PeriodKey,
  })
  periodKey: PeriodKey;

  @Prop({ required: true })
  price: number;

  @Prop({ required: false })
  accountCode: string;
}
export const BillingPeriodSchema = SchemaFactory.createForClass(BillingPeriod);
