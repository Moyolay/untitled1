const Router = require('express')
const router = new Router()
const agentController = require('../controllers/agentController')

router.post('/registration', agentController.registration)
router.post('/login', agentController.login)
router.get('/auth', agentController.check)


module.exports=router