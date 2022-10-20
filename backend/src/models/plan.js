const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const planSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  startDate: Date,
  endDate: Date,
  scene: String,
  status: String,
  transportation: String,
  departurePoint: String,
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
      autopopulate: true,
    },
  ],
})

class Plan {
  async addActivities(activity) {
    // const activities = new Activity(name, location, time)
    this.activities.push(activity)
    await this.save()
  }
}
planSchema.loadClass(Plan)

planSchema.plugin(autopopulate)
module.exports = mongoose.model('Plan', planSchema)
