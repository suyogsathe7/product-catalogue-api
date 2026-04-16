import { Router, Request, Response } from 'express';
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto, UpdateProductDto } from '../models/product';

const router = Router();
const repository = new ProductRepository();

router.get('/', (req: Request, res: Response) => {
    const products = repository.findAll();
    res.status(200).json(products);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const product = repository.findById(id);
    product ? res.status(200).json(product) : res.status(404).json({ message: "No Product found" });
});

router.post('/', (req: Request, res: Response) => {
    const addedProduct = repository.create(req.body as CreateProductDto);
    res.status(201).json(addedProduct);
});

router.put('/:id', (req: Request, res: Response) => {
    const updatedProduct = repository.update(req.params.id as string, req.body as UpdateProductDto); 
    updatedProduct ? res.status(200).json(updatedProduct) : res.status(404).json({ message: "Product not found"});
});

router.delete('/:id', (req: Request, res: Response) => {
    const productId = req.params.id;
    const isDeleted = repository.delete(productId);
    isDeleted ? res.status(200).json({ message: `Successfully deleted product ${productId}` }) : res.status(404).json({ message: `Failed to delete product ${productId}` })
});

export default router;