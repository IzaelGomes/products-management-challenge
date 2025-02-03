import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class GetProductsQueryParamsDto {
  @IsOptional()
  @IsString()
  name: string;
}
