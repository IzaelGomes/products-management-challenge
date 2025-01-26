import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductRepository } from '../repositories/product.repository';

type GetAllProductsUseCaseResponse = Product;

@Injectable()
export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string): Promise<GetAllProductsUseCaseResponse> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new NotFoundException();

    return product;
  }
}
