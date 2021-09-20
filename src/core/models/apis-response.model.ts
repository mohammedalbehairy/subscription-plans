export class ApisResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
}
