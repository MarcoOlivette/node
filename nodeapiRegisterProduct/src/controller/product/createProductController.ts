import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/createProductService'

class CreateProductController {
    async handle(req: Request, res: Response){
        const { name, price, category, amout } = req.body

        const service = new CreateProductService()

        const result = await service.execute(name, price, category, amout)

        return res.json(result)
    }
}

export { CreateProductController }