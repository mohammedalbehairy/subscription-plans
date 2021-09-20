import { User } from './user.model';
import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async validateMerchant(
    deviceToken: string,
    fingerPrint: string,
    authorization: string,
  ) {
    if (!deviceToken || !fingerPrint || !authorization) return null;
    const url = `${this.configService.get<string>('CORE_API_URL')}/merchant/me`;
    try {
      const response = await this.httpService
        .post(
          url,
          {
            fingerPrint,
            authorization,
            deviceToken,
          },
          {},
        )
        .toPromise();

      if (response.data && response.data.statusCode === 200) {
        return new User(response.data.data.userId, response.data.data.userRole);
      } else {
        return null;
      }
    } catch (error) {
      if (error.request) {
        throw new Error('Auth service is not reachable');
      } else {
        throw new Error('Service could not make a request to the auth servie');
      }
    }
  }
}
