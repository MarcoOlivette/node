import { Router } from 'express'
import { GetUserController } from '../controller/user/getUserController'
import { LoginUserController } from '../controller/user/loginUserController'
import { SignInUserController } from '../controller/user/signinUserController'

export const userRouter:Router = Router()

userRouter.post('/signin', new SignInUserController().handle)
userRouter.post('/login', new LoginUserController().handle)
userRouter.get('/getuser', new GetUserController().handle)
userRouter.put('/updateuser',)
userRouter.delete('/deleteuser',)