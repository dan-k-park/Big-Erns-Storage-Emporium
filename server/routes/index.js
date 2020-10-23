const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req,res) => res.send('This is root!'))
router.post('/admins', controllers.createAdmin)
router.get('/admins', controllers.getAllAdmins)
router.get('/admins/:id', controllers.getAdminById)
router.put('/admins/:id', controllers.updateAdmin)

module.exports = router