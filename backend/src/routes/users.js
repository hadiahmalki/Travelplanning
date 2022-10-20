const express = require('express')
const Plan = require('../models/plan')
const User = require('../models/user')

const router = express.Router()

/* User.push(
  ...[
    {
      name: 'Hadiah',
      email: 'hadiah@email.com',
      plans: ['Italy Trip', 'Finland trip', 'Morocco trip', 'Albania trip', 'Austria trip'],
    },
    { name: 'Sarah', email: 'sarah@email.com', plans: ['France trip', 'Mexico trip'] },
    { name: 'Jenna', email: 'jenna@email.com', plans: ['Morocco trip', 'Spain trip', 'Syria trip'] },
    { name: 'Danny', email: 'danny@email.com', plans: ['Switzerland trip'] },
  ]
) 
console.log(users)
/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.name) {
    query.name = req.query.name
    // result = users.filter(user => user.name === req.query.name)
  }
  res.send(await User.find(query))
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('plans')
})
router.get('/initialize', async (req, res) => {
  console.log('Hello')
  const hadiah = new User({ name: 'hadiah', email: 'hadiah@mail.com' })
  // await hadiah.setPassword('pass')
  await hadiah.save()

  const sarah = new User({ name: 'sarah', email: 'sara@mail.com' })
  // await sarah.setPassword('pass')
  await sarah.save()

  const jenna = new User({ name: 'jenna', email: 'jenna@mail.com' })
  // await jenna.setPassword('pass')
  await jenna.save()

  const danny = new User({ name: 'danny', email: 'danny@mail.com' })
  // await danny.setPassword('pass')
  await danny.save()

  // async function main() {
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
  await hadiah.addPlan(hadiahPlan)
  //  await hadiahPlan.save()
  await danny.addPlan(dannyPlan)
  // await dannyPlan.save()
  /* await sarah.addPlan(hadiahPlan)
  await sarah.addPlan(dannyPlan)
  await danny.addPlan(hadiahPlan) */
  // sarah.note = 'Camera , Rollersakates , Sunscreen '
  /* await jenna.likePlan(hadiahPlan)
  await sarah.likePlan(hadiahPlan)
  await hadiah.likePlan(dannyPlan) */
})
module.exports = router
