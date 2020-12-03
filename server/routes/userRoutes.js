const { User } = require('../models')

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const users = await User.findAll();

    res.send(users);
  })
}