import { NotFoundException } from '@nestjs/common';
import { InMemoryProductRepository } from '../repositories/product-repository-in.memory';
import { CreateProductUseCase } from './create-product.usecase';
import { DeleteProductUseCase } from './delete-product.usecase';
import { randomUUID } from 'crypto';

describe('DeleteProductUseCase', () => {
  let deleteProducUseCase: DeleteProductUseCase;
  let productRepository: InMemoryProductRepository;

  beforeEach(async () => {
    productRepository = new InMemoryProductRepository();
    deleteProducUseCase = new DeleteProductUseCase(productRepository);

    const createProductUseCase = new CreateProductUseCase(productRepository);

    for (let i = 0; i < 2; i++) {
      await createProductUseCase.execute({
        name: `Produto ${i}`,
        description: 'Produto exportado com qualidade ótima',
        price: 50,
      });
    }
  });

  it('should delete a product', async () => {
    const products = await productRepository.findAll();

    const productId = products[0].id;

    await deleteProducUseCase.execute(productId);

    const updatedProducts = await productRepository.findAll();

    expect(updatedProducts).toHaveLength(1);
  });

  it('should throw a error when product not found', async () => {
    const products = await productRepository.findAll();

    const productId = randomUUID();

    await expect(deleteProducUseCase.execute(productId)).rejects.toEqual(
      new NotFoundException('Produto não encontrado.'),
    );
    expect(products).toHaveLength(2);
  });
});
