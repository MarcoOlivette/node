import { Router } from 'express'
import { CreateProductController } from '../controller/createProductController'
import { DecrementProductAmoutController } from '../controller/decrementProductAmoutController'
import { DeleteProductController } from '../controller/deleteProductController'
import { GetProductByCategoryController } from '../controller/getProductByCategoryController'
import { GetProductByNameController } from '../controller/getProductByNameController'
import { IncrementProductAmoutController } from '../controller/incrementAmoutProductController'
import { UpdateProductController } from '../controller/updateProductController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('/getcategory', new GetProductByCategoryController().handle)
productRouter.get('/getname', new GetProductByNameController().handle)
productRouter.put('/updateproduct', new UpdateProductController().handle)
productRouter.put('/incrementamout', new IncrementProductAmoutController().handle)
productRouter.put('/decrementamout', new DecrementProductAmoutController().handle)
productRouter.delete('/delete', new DeleteProductController().handle)