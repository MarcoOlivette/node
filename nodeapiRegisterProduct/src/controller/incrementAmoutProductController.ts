import { Request, Response } from 'express'
import { IncrementProductAmoutService } from '../services/incrementAmoutProductService'


class IncrementProductAmoutController {
    async handle(req: Request, res: Response){
        const { id, amout } = req.body

        const service = new IncrementProductAmoutService()

        const result = await service.execute(amout, String(id))

        return res.json(result)
    }
}

export { IncrementProductAmoutController }