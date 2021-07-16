const Router = require('express')
const router = new Router()
const agentController = require('../controllers/agentController')

router.post('/',agentController.create)
router.get('/',agentController.getAll)


module.exports=router