let userId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++ userId
    store.drivers.push(this)
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++ passengerId
    store.drivers.push(this)
  }
}