import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeleteProductDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
