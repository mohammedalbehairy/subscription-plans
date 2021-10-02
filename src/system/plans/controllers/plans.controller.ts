import { ExtendedExceptionFilter } from './../../../core/filters/extended-exception.filter';
import { MerchantGuard } from './../../../core/gaurds/merchant.guard';
import { GetPlanParamsDto } from './../dtos/get-plan-param.dto';
import { JoiValidationPipe } from './../../../shared/pipes/joi-validation.pipe';
import {
  createPlanBodySchema,
  getAllPlansQuerySchema,
  getPlanByIdParamsSchema,
  updatePlanBodySchema,
  updatePlanParamsSchema,
} from './../validations/validation.schema';
import { CreatePlanBodyDto } from './../dtos/create-plan-body.dto';
import { PlansService } from './../services/plans.service';
import { Plan } from './../models/plan.model';
import {
  Body,
  Controller,
  Post,
  Req,
  Get,
  Query,
  Param,
  Put,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { UpdatePlanBodyDto } from '../dtos/update-plan-body.dto';
import { UpdatePlanParamsDto } from '../dtos/update-plan-params.dto';

@UseFilters(ExtendedExceptionFilter)
@UseGuards(MerchantGuard)
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
    console.log('==body=====', req.body);
    console.log('==createPlanBodyDto=====', createPlanBodyDto);

    return await this.plansService.create(
      req.currentUser.userId,
      createPlanBodyDto,
    );
  }

  @Put('/:id')
  async updatePage(
    @Req() req,
    @Param(new JoiValidationPipe(updatePlanParamsSchema))
    params: UpdatePlanParamsDto,
    @Body(new JoiValidationPipe(updatePlanBodySchema))
    updatePlanBodyDto: UpdatePlanBodyDto,
  ): Promise<Plan> {
    return await this.plansService.update(
      params.id,
      req.currentUser.userId,
      updatePlanBodyDto,
    );
  }
}
