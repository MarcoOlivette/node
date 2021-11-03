import { Router } from "express";
import { productRouter } from "./productRouter";
import { userRouter } from "./userRouter";

const router: Router = Router()

router.use('/product', productRouter)
router.use('/user', userRouter)

export { router }