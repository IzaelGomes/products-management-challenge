import { Injectable } from '@nestjs/common';
import { Product, ProductRepository } from '../repositories/product.repository';

type GetAllProductsUseCaseResponse = Product;

@Injectable()
export class GetAllProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<GetAllProductsUseCaseResponse[]> {
    const products = await this.productRepository.findAll();

    return products;
  }
}
