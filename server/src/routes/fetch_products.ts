import { Product } from './../entities/Product';
import express from 'express';
import { createQueryBuilder } from 'typeorm';

const router = express.Router();

router.get('/api/products', async (req, res) => {

	const products = await createQueryBuilder(
		'product'
	)
		.getMany();

	return res.json(products);
});

export { router as fetchProductsRouter };
