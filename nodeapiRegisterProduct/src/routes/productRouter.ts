import { Router } from 'express'
import { CreateProductController } from '../controller/createProductController'
import { GetProductByCategoryController } from '../controller/getProductByCategoryController'
import { GetProductByNameController } from '../controller/getProductByNameController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('/getName', new GetProductByNameController().handle)
productRouter.get('getCategory', new GetProductByCategoryController().handle)
productRouter.put('/update')
productRouter.delete('/delete')