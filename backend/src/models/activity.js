const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const activitySchema = new mongoose.Schema({
  name: String,
  duration: Number,
  date: Date,
  location: String,
})

/* const ActivitiesName = {
	Name: 'name',
}
const ActivitiesTime = {
	Time: 'time',
}
const ActivitiesLocation = {
	location: 'location',
} */

module.exports = mongoose.model('Activity', activitySchema)
