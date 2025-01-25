import {
  ProductRepository,
  Product,
} from 'src/modules/product/repositories/user.repository';
import { PrismaService } from '../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    id,
    name,
    description,
    price,
    createdAt,
  }: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        id,
        name,
        price,
        description,
        createdAt,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(user: Product): Promise<void> {
    await this.prisma.product.update({
      where: { id: user.id },
      data: {
        ...user,
        updatedAt: user.updatedAt || new Date(),
      },
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
