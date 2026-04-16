import express from 'express';
import productRouter from './routes/product.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});