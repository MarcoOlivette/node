import { json } from "express";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

class LoginUserService {
    async execute(email:string, password:string){
       try {
         const user = await prismaClient.user.findUnique({
             where:{
                 email
             }
         })
        
         const token = sign({
             user:{
                 id: user.id,
                 email: user.email
             }
         },process.env.JWT_SECRET,
         {
             subject: user.id,
             expiresIn: '1d'
         }
         )

         return {token, user}
           
       } catch (error) {
           return error
       }

    }
}

export { LoginUserService }