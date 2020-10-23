const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req,res) => res.send('This is root!'))

router.post('/admins', controllers.createAdmin)
router.get('/admins', controllers.getAllAdmins)
router.get('/admins/:id', controllers.getAdminById)
router.put('/admins/:id', controllers.updateAdmin)

router.post('/adminlocations', controllers.createAdminLocation)
router.get('/adminlocations', controllers.getAllAdminLocations)
router.put('/adminlocations/:id', controllers.updateAdminLocation)
router.delete('/adminlocations/:id', controllers.deleteAdminLocation)

router.post('/locations', controllers.createLocation)
router.get('/locations', controllers.getAllLocations)
router.get('/locations/:id', controllers.getLocationById)
router.put('/locations/:id', controllers.updateLocation)
router.delete('/locations/:id', controllers.deleteLocation)

router.post('/units', controllers.createUnit)
router.get('/units', controllers.getAllUnits)
router.get('/units/:id', controllers.getUnitById)
router.put('/units/:id', controllers.updateUnit)
router.delete('/units/:id', controllers.deleteUnit)

router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

module.exports = router