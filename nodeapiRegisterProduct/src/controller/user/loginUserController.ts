import { Request, Response } from 'express'
import { LoginUserService } from '../../services/user/loginUserService'

class LoginUserController {

    async handle(req:Request, res: Response){
        const { email, password } = req.body

        const service = new LoginUserService()

        const result = await service.execute(email, password)

        if(result){
            
        }
        return res.status(200).json(result)
    }
}

export { LoginUserController }