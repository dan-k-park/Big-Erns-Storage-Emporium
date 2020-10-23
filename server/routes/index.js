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

module.exports = router