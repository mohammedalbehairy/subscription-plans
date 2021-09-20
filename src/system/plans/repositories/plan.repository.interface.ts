import { UpdatePlanBodyDto } from './../dtos/update-plan-body.dto';
import { CreatePlanBodyDto } from './../dtos/create-plan-body.dto';
import { Plan } from '../models/plan.model';

export interface IPlanRepository {
  add(parameters: CreatePlanBodyDto): Promise<Plan>;
  update(parameters: UpdatePlanBodyDto): Promise<Plan>;
  getPlans(parameters: GetPlansParameters): Promise<Plan[]>;
  getById(id: string): Promise<Plan>;
  size(filter: PlanFilter): Promise<number>;
}

export interface PlanFilter {
  title?: string;
}
export interface PlanPagination {
  pageNumber: number;
  itemsPerPage: number;
}
export enum SortValues {
  DESC = 'desc',
  ASC = 'asc',
}
export interface Sort {
  createdAt?: SortValues;
}
export interface GetPlansParameters {
  filter: PlanFilter;
  pagination: PlanPagination;
  sort: Sort;
  excludedFields?: string[];
}
