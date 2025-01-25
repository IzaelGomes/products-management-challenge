import { InMemoryProductRepository } from '../repositories/user-repository-in.memory';
import { CreateProductUseCase } from './create-product.usecase';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: InMemoryProductRepository;

  beforeEach(() => {
    productRepository = new InMemoryProductRepository();
    createProductUseCase = new CreateProductUseCase(productRepository);
  });

  it('should create a new product successfully', async () => {
    const productData = {
      name: 'Bicicleta',
      description: 'Bicicleta de última geração',
      price: 100,
    };

    await createProductUseCase.execute(productData);

    const allProducts = await productRepository.findAll();
    expect(allProducts).toHaveLength(1);
    expect(allProducts[0]).toEqual(
      expect.objectContaining({
        name: productData.name,
        description: productData.description,
        price: productData.price,
      }),
    );
  });

  it('should generate a unique id for the product', async () => {
    const productData = {
      name: 'Microondas',
      description: 'Microondas inox 2025',
      price: 200,
    };

    await createProductUseCase.execute(productData);

    const allProducts = await productRepository.findAll();
    expect(allProducts[0].id).toBeDefined();
    expect(allProducts[0].id).toHaveLength(36); // UUID length has to be 36
  });
});
