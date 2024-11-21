import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id, name, description, price } = req.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      name,
      description,
      price,
    });

    return res.json(product);
  }
}

export { UpdateProductController };
