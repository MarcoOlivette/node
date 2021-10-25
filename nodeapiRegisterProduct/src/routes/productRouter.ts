import { Router } from 'express'
import { CreateProductController } from '../controller/createProductController'
import { DeleteProductController } from '../controller/deleteProductController'
import { GetProductByCategoryController } from '../controller/getProductByCategoryController'
import { GetProductByNameController } from '../controller/getProductByNameController'
import { UpdateProductController } from '../controller/updateProductController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('getcategory', new GetProductByCategoryController().handle)
productRouter.get('/getname', new GetProductByNameController().handle)
productRouter.put('/update', new UpdateProductController().handle)
productRouter.delete('/delete', new DeleteProductController().handle)