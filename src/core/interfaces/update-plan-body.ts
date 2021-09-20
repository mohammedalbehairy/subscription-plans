import { IBillingPeriod } from './billing-period';
import { IFreeTrial } from './free-trial';
import { ISubscriptionTerm } from './subscription-term';

export interface IUpdatePlanBody {
  title: string;
  code: string;
  description: string;
  billingPeriod: IBillingPeriod;
  subscriptionTerm: ISubscriptionTerm;
  freeTrial: IFreeTrial;
}
