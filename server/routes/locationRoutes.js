const { Location } = require('../models')

module.exports = app => {
  app.get('/api/locations', async (req, res) => {
    const locations = await Location.findAll();

    res.send(locations);
  })

  app.post('/api/locations', async (req, res) => {
    console.log(req.body);
  })
}