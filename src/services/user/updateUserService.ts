import prismaClient from "../../prisma";


class UpdateUserService {
    async execute(id: string, name: string, email: string ){

        const product = prismaClient.user.update({
            where:{
                id
            },
            data:{
               name,
               email
            }

        })

        return product
        
    }
}

export { UpdateUserService }