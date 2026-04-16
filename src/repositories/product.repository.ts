import { v4 as uuidv4 } from 'uuid';
import { Product, CreateProductDto, UpdateProductDto } from '../models/product';

export class ProductRepository {
    private products: Product[] = [];

    public findAll(): Product[] {
        return this.products;
    }

    public findById(id: string): Product | undefined{
        return this.products.find(p => p.id === id);
    }

    public create(dto: CreateProductDto): Product {
        const newProduct: Product = {
            ...dto,
            id: uuidv4(),
            createdAt: new Date()
        }
        this.products.push(newProduct);
        return newProduct;
    }   

    public update(id: string, dto: UpdateProductDto): Product | undefined {
        const index = this.products.findIndex(p => p.id === id);
        const existingProduct = this.products[index];
        if(index === -1){
            return undefined;
        }
        const updatedProduct: Product = {
            ...existingProduct,
            ...dto 
        }
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    public delete(id: string): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if(index === -1){
            return false;
        }
        this.products.splice(index, 1);
        return true;
    }

    public findByCategory(category: string): Product[] {
        return this.products.filter(p => p.category === category);
    }

    public search(query: string): Product[] {
        const queryString = query.toLowerCase();
        return this.products.filter(p => p.name.toLowerCase().includes(queryString) || p.brand.toLowerCase().includes(queryString));
    }  
    
    public findByPriceRange(minPrice: number, maxPrice: number): Product[] {
        return this.products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    }

    public findLowStock(threshold: number): Product[] {
        return this.products.filter(p => p.stock < threshold);
    }
}