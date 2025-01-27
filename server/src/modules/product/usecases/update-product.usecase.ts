import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product, ProductRepository } from '../repositories/product.repository';

type UpdateProductUseCaseRequest = Omit<Product, 'createdAt' | 'updatedAt'>;

@Injectable()
export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ id, name, description, price }: UpdateProductUseCaseRequest) {
    const product = await this.productRepository.findById(id);

    if (!product) throw new NotFoundException('Produto não encontrado.');

    if (price <= 0)
      throw new BadRequestException('O preço deve ser maior que zero');

    await this.productRepository.update({
      id,
      name,
      description,
      price,
      updatedAt: new Date(),
      createdAt: product.createdAt,
    });

    return;
  }
}
