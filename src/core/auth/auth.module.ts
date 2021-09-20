import { MerchantGuard } from './../gaurds/merchant.guard';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [AuthService, MerchantGuard],
  exports: [MerchantGuard, AuthService],
})
export class AuthModule {}
