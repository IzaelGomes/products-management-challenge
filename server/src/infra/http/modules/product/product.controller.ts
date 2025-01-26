import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { CreateProductDto } from './dtos/create-product.dto';
import { GetAllProductsUseCase } from 'src/modules/product/usecases/get-all-products.usecase';
import { GetProductUseCase } from 'src/modules/product/usecases/get-product.usecase';
import { GetProductDto } from './dtos/get-product.dto';
import { DeleteProductUseCase } from 'src/modules/product/usecases/delete-product.usecase';
import { DeleteProductDto } from './dtos/delete-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getProductUseCase: GetProductUseCase,
    private deleteProducUseCase: DeleteProductUseCase,
  ) {}
  @Post()
  async createProduct(@Body() product: CreateProductDto) {
    await this.createProductUseCase.execute(product);
  }

  @Get()
  async getProducts() {
    return await this.getAllProductsUseCase.execute();
  }

  @Get('/:id')
  async getProduct(@Param() params: GetProductDto) {
    return await this.getProductUseCase.execute(params.id);
  }

  @Delete('/:id')
  async deleteProduct(@Param() params: DeleteProductDto) {
    return await this.deleteProducUseCase.execute(params.id);
  }
}
