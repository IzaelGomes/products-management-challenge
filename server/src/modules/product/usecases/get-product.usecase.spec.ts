import { randomUUID } from 'crypto';
import { InMemoryProductRepository } from '../repositories/product-repository-in.memory';
import { CreateProductUseCase } from './create-product.usecase';
import { GetProductUseCase } from './get-product.usecase';
import { NotFoundException } from '@nestjs/common';

describe('GetProductUseCase', () => {
  let productRepository: InMemoryProductRepository;
  let getProductUseCase: GetProductUseCase;

  beforeAll(async () => {
    productRepository = new InMemoryProductRepository();
    getProductUseCase = new GetProductUseCase(productRepository);
    const createProductUseCase = new CreateProductUseCase(productRepository);

    for (let i = 0; i < 2; i++) {
      await createProductUseCase.execute({
        name: `Produto ${i}`,
        description: 'Produto exportado com qualidade ótima',
        price: 50,
      });
    }
  });

  it('should get a product by its id', async () => {
    const products = await productRepository.findAll();

    const product = await getProductUseCase.execute(products[0].id);

    expect(product).toBeDefined();
    expect(product).toHaveProperty('name', 'Produto 0');
  });

  it('should throw a error when product not found', async () => {
    const randomId = randomUUID();

    await expect(getProductUseCase.execute(randomId)).rejects.toEqual(
      new NotFoundException(),
    );
  });
});
