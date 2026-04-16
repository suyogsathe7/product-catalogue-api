# product-catalogue-api

A RESTful API built with TypeScript and Express, featuring a product catalogue with full CRUD operations.

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express
- **Storage:** In-memory

## Project Structure

```
src/
├── models/
│   └── product.ts              # Product interface and DTOs
├── repositories/
│   └── product.repository.ts   # In-memory data layer (9 methods)
├── routes/
│   └── product.routes.ts       # Route handlers (5 endpoints)
└── index.ts                    # Express server entry point
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a single product by ID |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Server runs on `http://localhost:3000`.

## Example Request

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Samsung TV", "brand": "Samsung", "category": "TVs", "price": 999, "stock": 10}'
```

## Git History

- `initial project setup - express + typescript`
- `remove node_modules, add .gitignore`
- `add Product interface and DTOs`
- `add ProductRepository with full CRUD operations`
- `add findByCategory and search methods to ProductRepository`
- `add findByPriceRange and findLowStock methods to ProductRepository`
- `add product routes with full CRUD endpoints`
- `add express server entry point and wire up product routes`