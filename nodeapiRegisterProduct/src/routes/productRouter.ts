import { Router } from 'express'
import { CreateProductController } from '../controller/createProductController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('/get',)
productRouter.put('/update')
productRouter.delete('/delete')