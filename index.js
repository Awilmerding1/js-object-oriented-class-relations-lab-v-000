let userId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  
  constructor(name) {
    this.name = name
    this.id = ++ userId
    
    store.drivers.push(this)
  }
  
  
  
}