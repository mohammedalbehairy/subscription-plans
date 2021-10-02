import { CreatePlanBodyDto } from './../dtos/create-plan-body.dto';
import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IPlanRepository } from '../repositories/plan.repository.interface';
import { UpdatePlanBodyDto } from '../dtos/update-plan-body.dto';

@Injectable()
export class PlansService {
  constructor(
    @Inject('IPlanRepository') private planRepository: IPlanRepository,
  ) {}

  async getById(id: string) {
    const plan = await this.planRepository.getById(id);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }
    return plan;
  }

  async list(query: any) {
    const count = await this.planRepository.size(query.filter);
    const plans = await this.planRepository.getPlans(query);

    return {
      pageNumber: query.pagination.pageNumber,
      toatalCount: count,
      content: plans,
    };
  }

  async create(merchantId: string, createPlanBodyDto: CreatePlanBodyDto) {
    console.log('===async create======merchantId=====', merchantId);
    console.log(
      '===async create======createPlanBodyDto=====',
      createPlanBodyDto,
    );

    return await this.planRepository.add({ ...createPlanBodyDto, merchantId });
  }

  async update(
    planId: string,
    merchantId: string,
    updatePlanBodyDto: UpdatePlanBodyDto,
  ) {
    const plan = await this.planRepository.getById(planId);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }
    if (plan.merchantId !== merchantId) {
      throw new ForbiddenException('You are not allowed to update this plan');
    }

    return this.planRepository.update(planId, {
      ...updatePlanBodyDto,
      merchantId,
    });
  }
}
