import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GetProductDto {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  id: string;
}
