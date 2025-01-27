import { BadRequestException, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ProductRepository } from '../repositories/product.repository';

type CreateProductUseCaseRequest = {
  name: string;
  description: string;
  price: number;
};

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute({ description, name, price }: CreateProductUseCaseRequest) {
    if (price <= 0)
      throw new BadRequestException('O preço deve ser maior que zero');

    await this.productRepository.create({
      id: randomUUID(),
      name,
      description,
      price,
      createdAt: new Date(),
    });

    return;
  }
}
