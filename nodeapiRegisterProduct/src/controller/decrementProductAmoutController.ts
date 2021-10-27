import { Request, Response } from 'express'
import { DecrementProductAmoutService } from '../services/decrementProductAmoutService'


class DecrementProductAmoutController {
    async handle(req: Request, res: Response){
        const { id, amout } = req.body

        const service = new DecrementProductAmoutService()

        const result = await service.execute(amout, String(id))

        return res.json(result)
    }
}

export { DecrementProductAmoutController }