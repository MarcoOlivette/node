import { Router } from 'express'
import { SignInUserController } from '../controller/user/signUserController'

export const userRouter:Router = Router()

userRouter.post('/signin', new SignInUserController().handle)
userRouter.post('/login',)
userRouter.get('/get',)
userRouter.put('/update',)
userRouter.delete('/delete',)