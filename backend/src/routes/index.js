const express = require('express')
// const Users = require('../models/user')
// const { router } = require('express')
const User = require('../models/user')
const Plan = require('../models/plan')

const router = express.Router()

// GET home page.
router.get('/', (req, res) => {
  res.render('index', { title: `Hello this a Travel planning app`, welcome: User })
})
router.get('/planform', (req, res) => {
  res.render('plan', { title: `Welcome to your first plan` })
})
router.get('/initialize', async (req, res) => {
  const hadiah = await User.create({ name: 'hadiah', email: 'hadiah@mail.com' })
  const sarah = await User.create({ name: 'sarah', email: 'sara@mail.com' })
  const jenna = await User.create({ name: 'jenna', email: 'jenna@mail.com' })
  const danny = await User.create({ name: 'danny', email: 'danny@mail.com' })
  const hadiahPlan = await Plan.create({
    name: 'Italy Trip',
    budget: 900,
    startDate: new Date('11/13/2022'),
    endDate: new Date('11/17/2022'),
    scene: 'mountain',
    status: 'solo',
    transportation: 'car',
    departurePoint: 'germany',
  })
  const dannyPlan = await Plan.create({
    name: 'France Trip',
    budget: 600,
    startDate: new Date('12/1/2022'),
    endDate: new Date('12/3/2022'),
    scene: 'city',
    status: 'solo',
    transportation: 'train',
    departurePoint: 'luxemberg',
  })
  await hadiahPlan.save()
  await dannyPlan.save()
  await sarah.addPlan(hadiahPlan)
  await sarah.addPlan(dannyPlan)
  await danny.addPlan(hadiahPlan)
  // sarah.note = 'Camera , Rollersakates , Sunscreen '
  await jenna.likePlan(hadiahPlan)
  await sarah.likePlan(hadiahPlan)
  await hadiah.likePlan(dannyPlan)
  return res.sendStatus(200)
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

router.post('/activity', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.duration)
  console.log(req.body.date)
  console.log(req.body.location)
  res.send('ok')
})

module.exports = router
