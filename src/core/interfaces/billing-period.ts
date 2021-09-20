import { PeriodKey } from '../enums/period-key';

export interface IBillingPeriod {
  count: number;
  periodKey: PeriodKey;
  price: number;
}
