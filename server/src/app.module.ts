import { Module } from '@nestjs/common';
import { ProductModule } from './infra/http/modules/product/product.module';
import { DataBaseModule } from './infra/database/database.module';

@Module({
  imports: [ProductModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
