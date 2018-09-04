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
  
  trips() {
    return store.items.filter(item => {
    return item.userId === this.id
    }
  }

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++ passengerId
    store.passengers.push(this)
  }
}

class Trip {
  constructor(driverId, passengerId) {
    this.driverId = driverId
    this.passengerId = passengerId
    this.id = ++ tripId
    store.trips.push(this)
  }
}

