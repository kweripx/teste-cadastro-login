//Imports
const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const database = require('./src/database')
const routes = require('./routes/routes')
const usersRouter = require('./routes/userRouter')
const PORT = 5001

//Body Parser was necessary cuz the infos wasn't going to database returning a lot of errors
app.use(bodyParser.urlencoded({ extended: false }))
routes.use(bodyParser.json())

//Static
app.use(express.static(__dirname + '/assets'))

//set views
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use('/', routes)
app.use('/users', usersRouter)

app.get('/login', (req, res) => {
        res.render('./login')
    })
    //Get register route
app.get('/register', (req, res) => {
        res.render('./register')
    })
    //POST Register Router
app.post('/register', usersRouter, (req, res) => {
    const email = req.body.email
    const password = req.body.password
})

//Login Router
app.post('/login', usersRouter, (req, res) => {
        res.render('login.ejs')
    })
    // app.get('/users', usersRouter)
app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`)
})