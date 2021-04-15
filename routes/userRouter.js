const express = require('express')
const userRouter = express.Router()
const userController = require('../src/controllers/userController')

//GET all users route
userRouter.get('/', userController.index)
//User register route
userRouter.post('/register', userController.create)
//User login route
userRouter.post('/login', userController.create)
//GET a single user route
userRouter.get('/:id', userController.show)
//Update a single user route
userRouter.put('/:id', userController.update)
//Delete a single user route
userRouter.delete('/:id', userController.delete)

module.exports = userRouter
