const express = require('express')
const userRouter = express.Router()
const userController = require('../src/controllers/userController')

userRouter.post('/', userController.create)
userRouter.get('/', userController.index)
userRouter.get('/:id', userController.show)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter
