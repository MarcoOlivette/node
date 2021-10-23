import prismaClient from "../prisma";


class CreateProductService {
    async execute(name: string, price: number, category: string ){

        const product = await prismaClient.product.create({
           data:{
               name,
               price,
               category:{
                   connectOrCreate:{
                       create:{
                           category
                       },
                       where:{
                           category
                       }
                   }
               }
           }
        })

        return product
        
    }
}

export { CreateProductService }