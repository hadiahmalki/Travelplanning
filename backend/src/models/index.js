const { default: mongoose } = require('mongoose')
const { router } = require('../app')
const Plan = require('./plan')
const User = require('./user')
const Activity = require('./activity')
// const TravelPlan = require('./plan')
// const Activity = require('./activity')
// const packingThing = require('./packing-things')
/* Router.get('/initialize', async (req, res) => {
  const hadiah = new User({ name: 'hadiah', email: 'hadiah@mail.com' })
  await hadiah.setPassword('pass')
  await hadiah.save()

  const sarah = new User({ name: 'sarah', email: 'sara@mail.com' })
  await sarah.setPassword('pass')
  await sarah.save()

  const jenna = new User({ name: 'jenna', email: 'jenna@mail.com' })
  await jenna.setPassword('pass')
  await jenna.save()

  const danny = new User({ name: 'danny', email: 'danny@mail.com' })
  await danny.setPassword('pass')
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
  await hadiahPlan.save()
  await dannyPlan.save()
  // ;[hadiah, sarah, jenna, danny].forEach(user => user.save())
  /* console.log(hadiah)
  // await Date('2022-11-11', '2022-11-22',  await trip', 'mountain', 'germany', 'solo', '900$')
  // )
  
  sarah.addPlan(hadiahsplan)
  sarah.leaveComment(hadiahsplan, 'Sounds awesome,I definitely going to try it next year')
  const jenna = await User('jenna')
  
  console.log(hadiahsplan)
  
  const Users = [hadiah, sarah, jenna]
  
  module.exports = {
    Users,
  } 
  await sarah.addPlan(hadiahPlan)
  await sarah.addPlan(dannyPlan)
  await danny.addPlan(hadiahPlan)
  // sarah.note = 'Camera , Rollersakates , Sunscreen '
  await jenna.likePlan(hadiahPlan)
  await sarah.likePlan(hadiahPlan)
  await hadiah.likePlan(dannyPlan)
}) 
// main()
module.exports = mongoose.model('User')
*/
