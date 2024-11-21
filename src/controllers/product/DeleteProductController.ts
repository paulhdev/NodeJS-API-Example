import { Request, Response } from 'express';
import { DeleteProductService } from '../../services/product/DeleteProductService';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { productId } = req.body;

    const deleteProductController = new DeleteProductService();

    const product = await deleteProductController.execute(productId);

    return res.json({
      status: 'deleted',
      product,
    });
  }
}

export { DeleteProductController };
