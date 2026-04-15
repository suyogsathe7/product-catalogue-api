export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  createdAt: Date;
}

export type CreateProductDto = Omit<Product, 'id' | 'createdAt'>;
export type UpdateProductDto = Partial<CreateProductDto>;