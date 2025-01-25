import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CreateProductUseCase } from 'src/modules/product/usecases/create-product.usecase';
import { DataBaseModule } from 'src/infra/database/database.module';

@Module({
  controllers: [ProductController],
  providers: [CreateProductUseCase],
  imports: [DataBaseModule],
})
export class ProductModule {}
