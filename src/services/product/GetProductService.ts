import prismaClient from '../../../prisma';

class GetProductService {
  async execute() {
    try {
      const total = await prismaClient.product.count();
      const allProducts = await prismaClient.product.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      return {
        total,
        items: allProducts,
      };
    } catch (error) {
      throw new Error('Error get product');
    }
  }
}

export { GetProductService };
