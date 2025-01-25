import { ProductRepository, Product } from './user.repository';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }

  async deleteById(id: string): Promise<void> {
    this.products = this.products.filter((product) => product.id !== id);
  }

  async update(product: Product): Promise<void> {
    const productIndex = this.products.findIndex(
      (item) => item.id === product.id,
    );
    if (productIndex !== -1) {
      this.products[productIndex] = {
        ...product,
        updatedAt: new Date(),
      };
    }
  }
}
