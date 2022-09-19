const User = require('./user')
// const TravelPlan = require('./plan')
// const Activity = require('./activity')
// const packingThing = require('./packing-things')

const hadiah = new User('hadiah')

const hadiahsplan = hadiah.createPlan(
  'Onurs trip',
  100,
  new Date('2022-11-11'),
  new Date('2022-11-22'),
  `mountain`,
  `asd`,
  `germany`,
  `car`
)
console.log(hadiah)
// new Date('2022-11-11', '2022-11-22', 'new trip', 'mountain', 'germany', 'solo', '900$')
// )

const sarah = new User('sarah')
sarah.addPlan(hadiahsplan)
sarah.leaveComment(hadiahsplan, 'Sounds awesome,I definitely going to try it next year')
const jenna = new User('jenna')

console.log(hadiahsplan)

const Users = [hadiah, sarah, jenna]

module.exports = {
  Users,
}
