import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class Pagination {
  @Min(0)
  @IsInt()
  @Type(() => Number)
  pageNumber: number;

  @Min(1)
  @Max(25)
  @IsInt()
  @Type(() => Number)
  itemsPerPage: number;
}
