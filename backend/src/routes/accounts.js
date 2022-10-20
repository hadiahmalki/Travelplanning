const express = require('express')
const passport = require('passport')
const User = require('../models/user')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.session)
})
router.post('/', async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    email: req.body.email,
  }
  const user = new User(userToCreate)
  await user.setPassword(req.body.password)
  await user.save()

  return user
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', (req, res) => {
  req.logout()
  res.send(true)
})
module.exports = router
