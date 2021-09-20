import { PeriodKey } from '../enums/period-key';

export interface IFreeTrial {
  count: number;
  periodKey: PeriodKey;
  isActive: boolean;
}
