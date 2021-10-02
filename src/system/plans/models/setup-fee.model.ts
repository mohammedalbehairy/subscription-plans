import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SetupFee extends Document {
  @Prop({ default: 0 })
  amount: number;

  @Prop({ default: undefined })
  accountCode: string;
}
export const SetupFeeSchema = SchemaFactory.createForClass(SetupFee);
