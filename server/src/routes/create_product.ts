import express from 'express';
import { Product } from '../entities/Product';

const router = express.Router();

router.post('/api/product', async (req, res) => {
	const {
		image,
		title,
		price,
		category,
		description,
	} = req.body;

	const product = Product.create({
		image,
		title,
		price,
		category,
		description,
	});

	await product.save();

	return res.json(product);
});

export { router as createProductRouter };
