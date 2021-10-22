import { Router } from 'express'
import { CreateProductController } from '../controller/createProductController'
import { GetProductByNameController } from '../controller/getProductByNameController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('/getByName', new GetProductByNameController().handle)
productRouter.get('getByCategory',)
productRouter.put('/update')
productRouter.delete('/delete')