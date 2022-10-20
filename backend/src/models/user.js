const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

// const users = []
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // unique: true,
    required: true,
  },
  plans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
      autopopulate: true,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
    },
  ],
  /* activites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ], */
  note: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: [],
    },
  ],
})

class User {
  async addPlan(plan) {
    // const newPlan = new TravelPlan(name, budget, startDate, endDate, scene, status, departurePoint, transportation)

    this.plans.push(plan)
    await this.save()

    // return newPlan
  }

  async likePlan(plan) {
    this.likes.push(plan)
    plan.likedBy.push(this)
    await this.save()
    await plan.save()
  }

  get Profile() {
    return `
#  ${this.name} (${this.email})
## Plans(${this.plans.length})
${this.plans
  .map(plan => {
    return plan.name
  })
  .join('\n')}
### Activites(${this.activites.length})
#### Notes: ${this.note}
`
  }

  /* set Profile(newValue) {
    throw new Error('Profile is only a getter')
  } */

  /* addPackingThing(plan, name, status) {
    const packingThings = new PackingThing(name, status, this)
    plan.packingThings.push(packingThings)
  } */
}
// users.push(hadiah, sarah, jenna, danny)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})
userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
