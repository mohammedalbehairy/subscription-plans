import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MerchantGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const deviceToken = request.headers.devicetoken;
    const fingerPrint = request.headers.fingerprint;
    const authorization = request.headers.authorization;

    if (
      typeof deviceToken !== 'string' ||
      typeof fingerPrint !== 'string' ||
      typeof authorization !== 'string'
    ) {
      throw new UnauthorizedException('You are not allowed make this request');
    }
    const merchantValidationResult = await this.authService.validateMerchant(
      deviceToken as string,
      fingerPrint as string,
      authorization as string,
    );

    if (
      merchantValidationResult &&
      merchantValidationResult.userRole === 'merchant'
    ) {
      const req = context.switchToHttp().getRequest();
      req.currentUser = merchantValidationResult;
      return true;
    } else {
      throw new UnauthorizedException('You are not allowed make this request');
    }
  }
}
