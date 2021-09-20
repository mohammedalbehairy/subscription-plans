import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubscriptionTerm extends Document {
  @Prop({ required: true })
  count: number;

  @Prop({ required: true })
  autoRenew: boolean;
}
export const SubscriptionTermSchema =
  SchemaFactory.createForClass(SubscriptionTerm);
