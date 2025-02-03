export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt?: Date;
};

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract findAll(name?: string): Promise<Product[]>;
  abstract findById(id: string): Promise<Product | null>;
  abstract update(product: Product): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
