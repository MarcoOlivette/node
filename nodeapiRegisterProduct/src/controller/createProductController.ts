import { Request, Response } from 'express'
import { CreateProductService } from '../services/createProductService'

class CreateProductController {
    async handle(req: Request, res: Response){
        const { name, price, category } = req.body

        const service = new CreateProductService()

        const result = await service.execute(name, price, category)

        return res.json(result)
    }
}

export { CreateProductController }