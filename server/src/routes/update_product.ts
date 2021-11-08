import express from 'express';
import { Product } from '../entities/Product';
import { createQueryBuilder } from 'typeorm';
import {getConnection} from "typeorm";

const router = express.Router();

router.put('/api/product/:productId', async (req, res) => {
    const { productId } = req.params;
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

    await Product.findOne(productId)
    let updatedProduct = await Product.update(productId,product)
	return res.json(updatedProduct);
});

export { router as updateProductRouter };






// await getConnection()
//     .createQueryBuilder()
//     .update(User)
//     .set({ firstName: "Timber", lastName: "Saw" })
//     .where("id = :id", { id: 1 })
//     .execute();