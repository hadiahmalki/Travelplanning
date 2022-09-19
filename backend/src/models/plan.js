class TravelPlan {
	transportation = []

	activities = []

	comments = []

	packingThings = []

	constructor(name, budget, startDate, endDate, scene, status, departurePoint) {
		this.name = name
		this.budget = budget
		this.startDate = startDate
		this.endDate = endDate
		this.scene = scene
		this.status = status
		this.departurePoint = departurePoint
	}

	/* addActivities(plan, location, name, time) {
		const activities = new Activity(name, location, time)
		this.plan.activities.push(activities)
	} */
}
module.exports = TravelPlan
