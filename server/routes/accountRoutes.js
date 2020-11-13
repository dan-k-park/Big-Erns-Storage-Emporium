module.exports = app => {
  app.get(
    '/reservations', (req, res) => {
      console.log(req.body)
    }
  )
}