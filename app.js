const express = require('express')
const app = express()
const database = require('./src/database')
const usersRouter = require('./routes/userRouter')
const routes = require('./routes/routes')

const PORT = 3001

// class App {
//   constructor() {
//     this.app = express()
//     this.middlewares()
//     this.routes()
//   }
//   middlewares() {
//     this.app.use(express.urlencoded({ extended: true }))
//     this.app.use(express.json())
//   }
//   routes() {
//     this.app.use('/users', usersRouter)
//     this.app.use('/', routes)
//   }
// }
// app.listen(PORT, () => {
//   console.log(`Server listening to ${PORT}`)
// })
// module.exports = new App()

app.use('/users', usersRouter)
app.use('/', routes)
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`)
})
