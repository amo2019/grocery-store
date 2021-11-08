import express from 'express';
import { Product } from '../entities/Product';

const router = express.Router();

router.delete(
	'/api/product/:productId',
	async (req, res) => {
		const { productId } = req.params;

		const response = await Product.delete(
			productId
		);

		return res.json(response);
	}
);

export { router as deleteProductRouter };
