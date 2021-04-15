const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const database = require('./src/database')
const routes = require('./routes/routes')
const usersRouter = require('./routes/userRouter')
const PORT = 5001

app.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use('/', routes)
app.use('/users', usersRouter)

app.get('/register', (req, res) => {
  res.render('./register')
})
//Register Router
app.post('/register', usersRouter, (req, res) => {
  res.render('./register')
})

//Login Router
app.post('/login', usersRouter)
// app.get('/users', usersRouter)
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`)
})
