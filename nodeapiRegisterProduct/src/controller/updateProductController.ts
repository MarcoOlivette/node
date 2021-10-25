import { Request, Response } from 'express'
import { UpdateProductService } from '../services/updateProductService'


class UpdateProductController {
    async handle(req: Request, res: Response){
        const { name, price, category } = req.body
        const { id } = req.query

        const service = new UpdateProductService()

        const result = await service.execute(name, price, category, String(id))

        return res.json(result)
    }
}

export { UpdateProductController }