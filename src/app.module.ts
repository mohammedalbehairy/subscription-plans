import { PlansModule } from './system/plans/plans.module';
import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { DbModule } from './db/db.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [SharedModule, DbModule, CoreModule, PlansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
