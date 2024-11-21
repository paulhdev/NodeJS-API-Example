import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateProductController } from './controllers/product/CreateProductController';
import { GetProductController } from './controllers/product/GetProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({ ok: 'OK...' });
});

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

router.post('/products', isAuthenticated, new CreateProductController().handle);
router.get('/products', new GetProductController().handle);
router.delete(
  '/products',
  isAuthenticated,
  new DeleteProductController().handle
);
router.put('/products', isAuthenticated, new UpdateProductController().handle);

export { router };
