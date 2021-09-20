import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PeriodKey } from 'src/core/enums/period-key';

@Schema()
export class FreeTrial extends Document {
  @Prop({ required: true })
  count: number;

  @Prop({
    required: true,
    type: String,
    enum: PeriodKey,
  })
  periodKey: string;

  @Prop({ default: false })
  isActive: boolean;
}
export const FreeTrialSchema = SchemaFactory.createForClass(FreeTrial);
