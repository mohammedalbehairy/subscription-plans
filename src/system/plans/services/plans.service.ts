import { CreatePlanBodyDto } from './../dtos/create-plan-body.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPlanRepository } from '../repositories/plan.repository.interface';

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

  async create(createPlanBodyDto: CreatePlanBodyDto) {
    return await this.planRepository.add(createPlanBodyDto);
  }

  async update(createPlanBodyDto: CreatePlanBodyDto) {
    return await this.planRepository.add(createPlanBodyDto);
  }
}
