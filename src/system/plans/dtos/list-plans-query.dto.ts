import { Pagination } from './pagination.dto';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';

export class PlansFilterDto {
  @IsOptional()
  title?: string;
}

export class GetAllPlansQueryDto {
  @Type(() => PlansFilterDto)
  @IsOptional()
  @ValidateNested({ each: true })
  filter?: PlansFilterDto;

  @Type(() => Pagination)
  @ValidateNested({ each: true })
  pagination: Pagination;
}
