import * as joi from 'joi';
import * as Extension from '@joi/date';
import { id } from './common.schemas';
import { PeriodKey } from 'src/core/enums/period-key';

joi.extend(Extension as any);

//#region Consts

const periodKey = joi
  .string()
  .trim()
  .valid(...Object.values(PeriodKey));

//#endregion Consts

export const getAllPlansQuerySchema = joi.object({
  filter: joi
    .object({
      title: joi.string().trim().min(1).max(20),
    })
    .min(1),
  pagination: joi
    .object({
      pageNumber: joi.required(),
      itemsPerPage: joi.number().integer().min(1).max(15).required(),
    })
    .required(),
  excludedFields: joi.array().optional(),
});

export const createPlanBodySchema = joi.object({
  merchantId: joi.string().required(), // TODO: for test till create merchant middlleware
  title: joi.string().trim().min(3).max(10),
  code: joi.string().trim().min(3).max(10),
  description: joi.string().trim().min(10).max(200),
  isActive: joi.boolean(),
  billingPeriod: joi.object({
    count: joi.number().integer().min(1).max(31).required(),
    periodKey: periodKey.required(),
    price: joi.number().min(1).required(),
  }),
  subscriptionTerm: joi.object({
    count: joi.number().integer().min(1).required(),
    autoRenew: joi.boolean().required(),
  }),
  freeTrial: joi.object({
    count: joi.number().integer().min(1).max(31).required(),
    periodKey: periodKey.required(),
    isActive: joi.boolean().required(),
  }),
});

export const updatePlanBodySchema = joi.object({
  merchantId: joi.string().required(), // TODO: for test till create merchant middlleware
  title: joi.string().trim().min(3).max(10),
  code: joi.string().trim().min(3).max(10),
  description: joi.string().trim().min(10).max(200),
  isActive: joi.boolean(),
  billingPeriod: joi.object({
    count: joi.number().integer().min(1).max(31).required(),
    periodKey: periodKey.required(),
    price: joi.number().min(1).required(),
  }),
  subscriptionTerm: joi.object({
    count: joi.number().integer().min(1).required(),
    autoRenew: joi.boolean().required(),
  }),
  freeTrial: joi.object({
    count: joi.number().integer().min(1).max(31).required(),
    periodKey: periodKey.required(),
    isActive: joi.boolean().required(),
  }),
});

export const getPlanByIdParamsSchema = joi.object({
  id: id.required(),
});
