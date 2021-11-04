import { check } from 'express-validator'

export const createValidation = () => [
    check('name').isLength({ min: 3}).notEmpty(),
    check('price').isLength({ min: 3}).notEmpty(),
    check('category').isLength({ min: 3}).notEmpty(),
    check('amout').isLength({ min: 1}).notEmpty()

]