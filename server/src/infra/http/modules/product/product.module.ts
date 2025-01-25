import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { DataBaseModule } from 'src/infra/database/database.module';
import { GetAllProductsUseCase } from 'src/modules/product/usecases/get-all-products.usecase';

@Module({
  controllers: [ProductController],
  providers: [CreateProductUseCase, GetAllProductsUseCase],
  imports: [DataBaseModule],
})
export class ProductModule {}
