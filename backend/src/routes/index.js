const express = require('express')
// const Users = require('../models/user')
const User = require('../models/index').Users

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Hello this a Travel planning app`, welcome: User })
})
router.get('/planform', (req, res) => {
  res.render('plan', { title: `Welcome to your first plan` })
})

router.post('/addplan', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.budget)
  console.log(req.body.scene)
  console.log(req.body.status)
  console.log(req.body.startDate)
  console.log(req.body.endDate)
  console.log(req.body.departurePoint)
  console.log(req.body.transportation)

  res.render('activity', { title: `Add your activities here` })

  // const travellPlan = {}
})

router.post('/addactivity', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.duration)
  console.log(req.body.date)
  console.log(req.body.location)
  res.send('ok')
})

module.exports = router
