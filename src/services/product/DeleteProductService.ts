import prismaClient from '../../../prisma';

class DeleteProductService {
  async execute(productId: string) {
    const product = await prismaClient.product.delete({
      where: {
        id: productId,
      },
    });

    return product;
  }
}

export { DeleteProductService };
