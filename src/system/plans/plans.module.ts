import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from './models/plan.model';
import { PlanRepository } from './repositories/plan.repository';
import { PlansController } from './controllers/plans.controller';
import { PlansService } from './services/plans.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Plan',
        schema: PlanSchema,
      },
    ]),
  ],
  providers: [
    PlansService,
    { provide: 'IPlanRepository', useClass: PlanRepository },
  ],
  controllers: [PlansController],
})
export class PlansModule {}
