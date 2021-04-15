const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./src/database')
const routes = require('./routes/routes')
const usersRouter = require('./routes/userRouter')

const PORT = 5001

app.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())
app.use('/', routes)
app.use('/users', usersRouter)
app.get('/users', usersRouter)
app.get('/users', usersRouter)
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`)
})
