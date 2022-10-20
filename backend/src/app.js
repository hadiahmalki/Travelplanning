require('dotenv').config({ debug: process.env.DEBUG, path: '../.env' })
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const passport = require('passport')
const User = require('./models/user')
require('./models')

require('./database-connection')

const clientPromise = mongoose.connection.asPromise().then(connection => connection.getClient())
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const planRouter = require('./routes/plan')
const accountsRouter = require('./routes/accounts')

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: ['Thisisasupersecuresecretsecret', 'thisisavalidatorformyfirstsecretsecret'],
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())
passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  // eslint-disable-next-line no-plusplus
  req.session.viewCount++
  next()
})

app.use('/api', indexRouter)
app.use('/api/accounts', accountsRouter)
app.use('/api/users', usersRouter)
app.use('/api/plan', planRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
