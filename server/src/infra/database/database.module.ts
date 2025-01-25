import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductRepository } from 'src/modules/product/repositories/user.repository';
import { PrismaProductRepository } from './prisma/repositories/prisma-product.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class DataBaseModule {}
