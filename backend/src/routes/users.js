const express = require('express')

const router = express.Router()

const users = [
  {
    name: 'Hadiah',
    email: 'hadiah@email.com',
    password: 'dgs66o8',
    plans: ['Italy Trip', 'Finland trip', 'Morocco trip', 'Albania trip', 'Austria trip'],
  },
  { name: 'Sarah', email: 'sarah@email.com', password: '22kkz0', plans: ['France trip', 'Mexico trip'] },
  { name: 'Jenna', email: 'jenna@email.com', password: 'pa339cc', plans: ['Morocco trip', 'Spain trip', 'Syria trip'] },
  { name: 'Danny', email: 'danny@email.com', password: '20oosna', plans: ['Switzerland trip'] },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  let result = users
  if (req.query.name) {
    result = users.filter(user => user.name === req.query.name)
  }
  res.send(result)
})

router.get('/:userId', function (req, res, next) {
  res.send(users[req.params.userId])
})
module.exports = router
