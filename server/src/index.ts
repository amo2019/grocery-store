import { createConnection } from 'typeorm';
import express, { response } from 'express';
import cors from 'cors';
import { Product } from './entities/Product';
import { createProductRouter } from './routes/create_product';
import { deleteProductRouter } from './routes/delete_product';
import { updateProductRouter } from './routes/update_product';
import { fetchProductsRouter } from './routes/fetch_products';

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))
const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '99185',
      database: 'orm-postgres',
      entities: [Product],
      synchronize: true,
    });
    console.log('Connected to Postgres...');

    app.use(express.json());

    app.use(createProductRouter);
    app.use(deleteProductRouter);
    app.use(fetchProductsRouter);
    app.use(updateProductRouter);
    
    app.listen(8080, () => {
      console.log('Now running on port 8080');
    });
  } catch (error) {
    response.send({ Error: 'Something went wrong' });
    console.error(error);
    throw new Error('Unable to connect to db');
  }
};

main();
