import { Router } from 'express'
import { DeleteUserController } from '../controller/user/deleteUserController'
import { GetUserController } from '../controller/user/getUserController'
import { LoginUserController } from '../controller/user/loginUserController'
import { SignInUserController } from '../controller/user/signinUserController'
import { UpdateUserController } from '../controller/user/updateUserController'

export const userRouter:Router = Router()

userRouter.post('/signin', new SignInUserController().handle)
userRouter.post('/login', new LoginUserController().handle)
userRouter.get('/getuser', new GetUserController().handle)
userRouter.put('/updateuser', new UpdateUserController().handle)
userRouter.delete('/deleteuser', new DeleteUserController().handle)