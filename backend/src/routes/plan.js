const express = require('express')
const Plan = require('../models/plan')

const router = express.Router()

/* GET plans listing. */
router.get('/', async (req, res) => {
  const plans = await Plan.find({})
  res.send(plans)
})
router.post('/:id/activity', async (req, res) => {
  const plan = await Plan.findById(req.params.id)
  plan.addActivities(req.body.activity)
  res.send(plan)
})
module.exports = router
