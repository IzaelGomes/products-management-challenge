import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { CreateProductDto } from './dtos/create-product.dto';
import { GetAllProductsUseCase } from 'src/modules/product/usecases/get-all-products.usecase';

@Controller('product')
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase,
  ) {}
  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    await this.createProductUseCase.execute(product);
  }

  @Get()
  async getProducts() {
    return await this.getAllProductsUseCase.execute();
  }
}
