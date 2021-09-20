import { PlansModule } from './system/plans/plans.module';
import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { DbModule } from './db/db.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
    DbModule,
    CoreModule,
    PlansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
