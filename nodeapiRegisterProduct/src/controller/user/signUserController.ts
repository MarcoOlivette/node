import { Request, Response } from 'express'
import { SignInUserService } from '../../services/user/signinUserService'


class SignInUserController {

    async handle(req:Request, res: Response){
        const { name, email, password } = req.body

        const service = new SignInUserService()

        const result = service.execute(name, email, password)

        return res.json(result)
    }
}

export { SignInUserController }