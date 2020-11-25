const { Unit } = require('../models')

module.exports = app => {
  app.get('/api/units', async (req, res) => {
    const units = await Unit.findAll();

    res.send(units);
  })

  app.post('/api/units', async (req, res) => {
    console.log(req.body);
  })
}