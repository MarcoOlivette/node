import prismaClient from "../prisma";


class CreateProductService {
    async execute(name: string, price: number, category: string, amout: number ){

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
               },
               inventory:{
                   create:{
                       amout
                   }
               }
           }
        })

        return product
        
    }
}

export { CreateProductService }