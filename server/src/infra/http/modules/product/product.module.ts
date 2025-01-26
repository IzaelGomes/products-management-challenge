import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { DataBaseModule } from 'src/infra/database/database.module';
import { GetAllProductsUseCase } from 'src/modules/product/usecases/get-all-products.usecase';
import { GetProductUseCase } from 'src/modules/product/usecases/get-product.usecase';
import { DeleteProductUseCase } from 'src/modules/product/usecases/delete-product.usecase';

@Module({
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    GetAllProductsUseCase,
    GetProductUseCase,
    DeleteProductUseCase,
  ],
  imports: [DataBaseModule],
})
export class ProductModule {}
