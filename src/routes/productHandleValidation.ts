import { check } from 'express-validator'

export const createValidation = () => [
    check('name').isLength({ min: 5 }),
]