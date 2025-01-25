export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt?: Date;
};

export abstract class ProductRepository {
  abstract create(user: Product): Promise<void>;
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: string): Promise<Product | null>;
  abstract update(user: Product): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
