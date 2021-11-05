import { Request, Response } from 'express'
import { SignInUserService } from '../../services/user/signinUserService'
import { UpdateUserService } from '../../services/user/updateUserService'

class UpdateUserController {
    async handle(req: Request, res: Response){
        const { id, name, email } = req.body

        const service = new UpdateUserService()

        try {
            const result = await service.execute(String(id),name, email)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Invalid User'})
        }
    }
}

export { UpdateUserController }