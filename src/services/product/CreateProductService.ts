import prismaClient from '../../../prisma';

export interface ProductRequest {
  name: string;
  description: string;
  price: number;
}

class CreateProductService {
  async execute({ name, description, price = 0.0 }: ProductRequest) {
    if (!name || !description) {
      throw new Error('Name and Description is required');
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
      },
    });

    return product;
  }
}

export { CreateProductService };
