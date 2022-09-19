const PackingThing = require('./packing-things')
const TravelPlan = require('./plan')
// const Activity = require('./activity')

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.plans = []
    this.comments = []
  }

  greet(user) {
    console.log(`Hello ${user.name},this is ${this.name}`)
  }

  createPlan(name, budget, startDate, endDate, scene, status, departurePoint, transportation) {
    const newPlan = new TravelPlan(name, budget, startDate, endDate, scene, status, departurePoint, transportation)

    this.plans.push(newPlan)

    return newPlan
  }

  addPlan(plan) {
    this.plans.push(plan)
  }

  savePlan(plan) {
    plan.savePlan(this)
    this.plans = this.plans.filter(p => p === plan)
  }

  addPackingThing(plan, name, status) {
    const packingThings = new PackingThing(name, status, this)
    plan.packingThings.push(packingThings)
  }

  leaveComment(plan, text) {
    this.comments.push(text)
  }
}
module.exports = User
