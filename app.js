const express = require('express')
const app = express()
const database = require('./src/database')
const usersRouter = require('./routes/userRouter')
const routes = require('./routes/routes')

const PORT = 3001

app.use('/users', usersRouter)
app.use('/', routes)
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`)
})
