import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class UpdateProductParamsDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

export class UpdateProductBodyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
