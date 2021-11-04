import { Router } from 'express'
import { CreateProductController } from '../controller/product/createProductController'
import { DecrementProductAmoutController } from '../controller/product/decrementProductAmoutController'
import { DeleteCategoryController } from '../controller/product/deleteProductCategoryController'
import { DeleteProductController } from '../controller/product/deleteProductController'
import { GetCategorysController } from '../controller/product/getCategorysController'
import { GetProductByCategoryController } from '../controller/product/getProductByCategoryController'
import { GetProductByNameController } from '../controller/product/getProductByNameController'
import { IncrementProductAmoutController } from '../controller/product/incrementAmoutProductController'
import { UpdateProductController } from '../controller/product/updateProductController'
import { userAuthenticated } from '../middleware/userAuthenticated'

export const productRouter:Router = Router()

productRouter.post('/create',userAuthenticated, new CreateProductController().handle)
productRouter.get('/getcategory', new GetProductByCategoryController().handle)
productRouter.get('/getname', new GetProductByNameController().handle)
productRouter.get('/categorys', new GetCategorysController().handle)
productRouter.put('/updateproduct',userAuthenticated, new UpdateProductController().handle)
productRouter.put('/incrementamout',userAuthenticated, new IncrementProductAmoutController().handle)
productRouter.put('/decrementamout',userAuthenticated, new DecrementProductAmoutController().handle)
productRouter.delete('/deleteproduct',userAuthenticated, new DeleteProductController().handle)
productRouter.delete('/deletecategory',userAuthenticated, new DeleteCategoryController().handle)