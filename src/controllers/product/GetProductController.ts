import { Request, Response } from 'express';
import { GetProductService } from '../../services/product/GetProductService';

class GetProductController {
  async handle(req: Request, res: Response) {
    const getProductService = new GetProductService();

    const products = await getProductService.execute();

    return res.json(products);
  }
}

export { GetProductController };
