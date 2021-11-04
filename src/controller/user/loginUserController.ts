import { Request, Response } from 'express'
import { LoginUserService } from '../../services/user/loginUserService'

class LoginUserController {

    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const service = new LoginUserService()

        try {
            const result = await service.execute(email, password)

            return res.json(result)   
        } catch (err) {
            return res.status(404).json({message: 'User not found'})
        }

    }
}

export { LoginUserController }