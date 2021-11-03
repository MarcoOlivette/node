import { Router } from 'express'
import { CreateProductController } from '../controller/product/createProductController'
import { DecrementProductAmoutController } from '../controller/product/decrementProductAmoutController'
import { DeleteProductController } from '../controller/product/deleteProductController'
import { GetCategorysController } from '../controller/product/getCategorysController'
import { GetProductByCategoryController } from '../controller/product/getProductByCategoryController'
import { GetProductByNameController } from '../controller/product/getProductByNameController'
import { IncrementProductAmoutController } from '../controller/product/incrementAmoutProductController'
import { UpdateProductController } from '../controller/product/updateProductController'

export const productRouter:Router = Router()

productRouter.post('/create', new CreateProductController().handle)
productRouter.get('/getcategory', new GetProductByCategoryController().handle)
productRouter.get('/getname', new GetProductByNameController().handle)
productRouter.get('/categorys', new GetCategorysController().handle)
productRouter.put('/updateproduct', new UpdateProductController().handle)
productRouter.put('/incrementamout', new IncrementProductAmoutController().handle)
productRouter.put('/decrementamout', new DecrementProductAmoutController().handle)
productRouter.delete('/delete', new DeleteProductController().handle)