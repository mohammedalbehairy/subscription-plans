import { IUpdatePlanBody } from './../../../core/interfaces/update-plan-body';
import { ICreatePlanBody } from './../../../core/interfaces/create-plan-body';
import { Plan } from '../models/plan.model';

export interface IPlanRepository {
  add(body: ICreatePlanBody): Promise<Plan>;
  update(id: string, body: IUpdatePlanBody): Promise<Plan>;
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
