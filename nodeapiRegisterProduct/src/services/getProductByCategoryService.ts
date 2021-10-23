import prismaClient from "../prisma";


class GetProductByCategoryService {
    async execute(category: string){
        const product = await prismaClient.category.findMany({
            where:{
                category: category
            },include:{
                product_category:true
            }
        })

        return product
    }
}

export { GetProductByCategoryService }