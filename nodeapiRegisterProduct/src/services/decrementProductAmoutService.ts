import prismaClient from "../prisma";


class DecrementProductAmoutService {
    async execute(new_amout: number, id: string ){

        const product = prismaClient.product.update({
            where:{
                id
            },
            data:{
               inventory:{
                    update:{
                        amout:{
                            decrement:new_amout
                        }
                    }
               }
            }

        })

        return product
        
    }
}

export { DecrementProductAmoutService }