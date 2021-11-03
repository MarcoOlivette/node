import { Router } from 'express'
import { LoginUserController } from '../controller/user/loginUserController'
import { SignInUserController } from '../controller/user/signinUserController'

export const userRouter:Router = Router()

userRouter.post('/signin', new SignInUserController().handle)
userRouter.post('/login', new LoginUserController().handle)
userRouter.get('/get',)
userRouter.put('/update',)
userRouter.delete('/delete',)