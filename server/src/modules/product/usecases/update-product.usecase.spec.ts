import { randomUUID } from 'crypto';
import { InMemoryProductRepository } from '../repositories/product-repository-in.memory';
import { CreateProductUseCase } from './create-product.usecase';
import { UpdateProductUseCase } from './update-product.usecase';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('UpdateProductUseCase', () => {
  let productRepository: InMemoryProductRepository;
  let updateProductUseCase: UpdateProductUseCase;

  beforeAll(async () => {
    productRepository = new InMemoryProductRepository();
    updateProductUseCase = new UpdateProductUseCase(productRepository);
    const createProductUseCase = new CreateProductUseCase(productRepository);

    await createProductUseCase.execute({
      name: 'Bicicleta',
      description: 'Produto exportado com qualidade ótima',
      price: 50,
    });
  });

  it('it should update a product', async () => {
    const products = await productRepository.findAll();
    const productId = products[0].id;
    await updateProductUseCase.execute({
      id: productId,
      name: 'Carro',
      description: 'Carro preto semi novo',
      price: 2000,
    });

    const product = await productRepository.findById(productId);

    expect(product).toMatchObject({
      id: productId,
      name: 'Carro',
      description: 'Carro preto semi novo',
      price: 2000,
    });
  });

  it('should throw an error if product not found', async () => {
    await expect(
      updateProductUseCase.execute({
        id: randomUUID(),
        name: 'Moto',
        description: 'Moto nova',
        price: 5000,
      }),
    ).rejects.toThrow(new NotFoundException('Produto não encontrado.'));
  });

  it('should throw an error if invalid price is provided', async () => {
    const products = await productRepository.findAll();
    const productId = products[0].id;
    await expect(
      updateProductUseCase.execute({
        id: productId,
        name: 'Carro',
        description: 'Carro preto semi novo',
        price: -2,
      }),
    ).rejects.toThrow(
      new BadRequestException('O preço deve ser maior que zero'),
    );
  });
});
