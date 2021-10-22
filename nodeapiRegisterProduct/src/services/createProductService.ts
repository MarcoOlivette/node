import prismaClient from "../prisma";


class CreateProductService {
    async execute(name: string, price: number, category: string ){

        //get procurar por category.name 
        //se isso retornar vazio cria o produto e nova category
    //    const getCategory = await prismaClient.category.findUnique({
    //        where:{
    //            category: category
    //        }
    //    })
    //     console.log(getCategory)

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

        
         //caso estiver preenchido a category
         //pega o abj category, cria o obj product, faz a relaçaõ entre os 2, e envia o produto (one to many)

        return product

    }
}

export { CreateProductService }