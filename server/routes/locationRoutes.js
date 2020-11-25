const { Location, Unit } = require('../models')

const makeUnits = (locationId, numUnitsToMake, price, size) => {
  const n = parseInt(numUnitsToMake)
  let length, width
  if (size == 25) {
    length = 5;
    width = 5;
  } else if (size == 75) {
    length = 15;
    width = 5;
  } else {
    length = 15;
    width = 10;
  }
  for (let i = 0; i < n; i++) {
    Unit.create({
      rented: false,
      start: null,
      price: price,
      length: length,
      width: width,
      userId: null,
      locationId: locationId
    })
    .catch(err => res.status(500).send(err.message))
  }
}

module.exports = app => {
  app.get('/api/locations', async (req, res) => {
    const locations = await Location.findAll();

    res.send(locations);
  })

  app.post('/api/locations', async (req, res) => {
    console.log(req.body);
    const { add1, add2, twentyfive, seventyfive, onefifty } = req.body
    const address = add1 + ' ' + add2
    const num25 = parseInt(twentyfive)
    const num75 = parseInt(seventyfive)
    const num150 = parseInt(onefifty)
    Location.create({
      address: address,
      num25: num25,
      num75: num75,
      num150: num150
    })
    .then(location => {
      makeUnits(location.id, num25, 25, 25)
      return location.id
    })
    .then(locationId => {
      makeUnits(locationId, num75, 40, 75)
      return locationId
    })
    .then(locationId => {
      makeUnits(locationId, num150, 55, 150)
    })
    .catch(err => res.status(500).send(err.message))
  })
}