import { PlanFilter } from './plan.repository.interface';
import { PlanDocument } from '../models/plan.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import {
  IPlanRepository,
  GetPlansParameters,
  SortValues,
} from './plan.repository.interface';
import { Plan } from '../models/plan.model';
import { Model } from 'mongoose';
import { CreatePlanBodyDto } from '../dtos/create-plan-body.dto';
import { UpdatePlanBodyDto } from '../dtos/update-plan-body.dto';

@Injectable()
export class PlanRepository implements IPlanRepository {
  constructor(
    @InjectModel('Plan') private readonly planModel: Model<PlanDocument>,
  ) {}

  async add(newaPlan: CreatePlanBodyDto): Promise<Plan> {
    const planM = new this.planModel(newaPlan);

    const result = await planM.save();
    return result;
  }

  async update(newaPlan: UpdatePlanBodyDto): Promise<Plan> {
    const planM = new this.planModel(newaPlan);

    const result = await planM.save();
    return result;
  }

  async getById(id) {
    const plan = await this.planModel.findById(id).lean();
    return plan;
  }

  async getPlans({
    filter = {},
    pagination,
    sort = {},
    excludedFields = [],
  }: GetPlansParameters): Promise<Plan[]> {
    if (Object.keys(sort).length === 0) sort = { createdAt: SortValues.DESC };
    const select = this.getExcludeSelectObject(excludedFields);
    const skip: number = (pagination.pageNumber - 1) * pagination.itemsPerPage;
    const queryFilter: any = { ...filter };
    if (filter.title) {
      queryFilter.title = {
        $regex: new RegExp(`${filter.title}`, 'i'),
      };
    }
    const plans = await this.planModel
      .find(queryFilter)
      .select(select)
      .limit(pagination.itemsPerPage)
      .skip(skip)
      .sort(sort)
      .lean();
    if (!plans || plans.length === 0) return [];

    return plans;
  }

  async size(filter: PlanFilter = {}): Promise<number> {
    const queryFilter: any = { ...filter };
    if (filter.title) {
      queryFilter.title = {
        $regex: new RegExp(`${filter.title}`, 'i'),
      };
    }
    return await this.planModel.countDocuments(queryFilter);
  }

  private getExcludeSelectObject(excludedFields: string[] = []) {
    const result = {};
    for (const field of excludedFields) {
      result[field] = 0;
    }
    return result;
  }
}
