import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    await this.createProductUseCase.execute(product);
  }
}
