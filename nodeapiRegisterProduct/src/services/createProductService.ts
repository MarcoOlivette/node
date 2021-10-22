import prismaClient from "../prisma";


class CreateProductService {
    async execute(name: string, price: number, category: string ){
        const product = await prismaClient.category.create({
          data:{
              category,
              product_category:{
                  create:{
                      name,
                      price
                  }
              }
          },
          include:{
              product_category:true
          }
        })

        return product

    }
}

export { CreateProductService }