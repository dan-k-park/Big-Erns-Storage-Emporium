const { Router } = require('express');
const adminController = require('../controllers/admin');
const adminLocationController = require('../controllers/adminlocation');
const locationController = require('../controllers/location');
const unitController = require('../controllers/unit');
const userController = require('../controllers/user');
const router = Router();

router.get('/', (req,res) => res.send('This is root!'))

router.post('/admins', adminController.createAdmin)
router.get('/admins', adminController.getAllAdmins)
router.get('/admins/:id', adminController.getAdminById)
router.put('/admins/:id', adminController.updateAdmin)

router.post('/adminlocations', adminLocationController.createAdminLocation)
router.get('/adminlocations', adminLocationController.getAllAdminLocations)
router.put('/adminlocations/:id', adminLocationController.updateAdminLocation)
router.delete('/adminlocations/:id', adminLocationController.deleteAdminLocation)

router.post('/locations', locationController.createLocation)
router.get('/locations', locationController.getAllLocations)
router.get('/locations/:id', locationController.getLocationById)
router.put('/locations/:id', locationController.updateLocation)
router.delete('/locations/:id', locationController.deleteLocation)

router.post('/units', unitController.createUnit)
router.get('/units', unitController.getAllUnits)
router.get('/units/:id', unitController.getUnitById)
router.put('/units/:id', unitController.updateUnit)
router.delete('/units/:id', unitController.deleteUnit)

router.post('/users', userController.createUser)
router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

module.exports = router