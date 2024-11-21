import prismaClient from '../../../prisma';
import { ProductRequest } from './CreateProductService';

interface ProductUpdateRequest extends ProductRequest {
  id: string;
}

class UpdateProductService {
  async execute({ id, name, description, price }: ProductUpdateRequest) {
    try {
      const product = await prismaClient.product.update({
        where: {
          id: id,
        },
        data: {
          name,
          description,
          price,
        },
      });

      return product;
    } catch (error) {
      throw new Error('Error update product');
    }
  }
}

export { UpdateProductService };
