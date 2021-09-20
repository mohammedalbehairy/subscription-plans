import { GetPlanParamsDto } from './../dtos/get-plan-param.dto';
import { JoiValidationPipe } from './../../../shared/pipes/joi-validation.pipe';
import {
  createPlanBodySchema,
  getAllPlansQuerySchema,
  getPlanByIdParamsSchema,
} from './../validations/validation.schema';
import { CreatePlanBodyDto } from './../dtos/create-plan-body.dto';
import { PlansService } from './../services/plans.service';
import { Plan } from './../models/plan.model';
import { Body, Controller, Post, Req, Get, Query, Param } from '@nestjs/common';

@Controller('plans')
export class PlansController {
  constructor(private plansService: PlansService) {}

  @Get('/:id')
  async getById(
    @Req() req,
    @Param(new JoiValidationPipe(getPlanByIdParamsSchema))
    params: GetPlanParamsDto,
  ): Promise<any> {
    return await this.plansService.getById(params.id);
  }

  @Get()
  async list(
    @Req() req,
    @Query(new JoiValidationPipe(getAllPlansQuerySchema)) query,
  ): Promise<any> {
    return await this.plansService.list(query);
  }

  @Post()
  async createPage(
    @Req() req,
    @Body(new JoiValidationPipe(createPlanBodySchema))
    createPlanBodyDto: CreatePlanBodyDto,
  ): Promise<Plan> {
    return await this.plansService.create(createPlanBodyDto);
  }
}