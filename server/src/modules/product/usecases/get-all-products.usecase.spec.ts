import { InMemoryProductRepository } from '../repositories/product-repository-in.memory';
import { CreateProductUseCase } from './create-product.usecase';
import { GetAllProductsUseCase } from './get-all-products.usecase';

describe('GetAllProductUseCase', () => {
  let getAllProductsUseCase: GetAllProductsUseCase;
  let productRepository: InMemoryProductRepository;

  beforeAll(async () => {
    productRepository = new InMemoryProductRepository();
    getAllProductsUseCase = new GetAllProductsUseCase(productRepository);

    const createProductUseCase = new CreateProductUseCase(productRepository);

    for (let i = 0; i < 2; i++) {
      await createProductUseCase.execute({
        name: `Produto ${i}`,
        description: 'Produto exportado com qualidade ótima',
        price: 50,
      });
    }
  });
  it('should list all products', async () => {
    const products = await getAllProductsUseCase.execute();

    expect(products).toHaveLength(2);
    products.forEach((item, index) => {
      expect(item).toHaveProperty('name', `Produto ${index}`);
    });
  });
});
