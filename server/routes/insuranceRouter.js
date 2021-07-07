const Router = require('express')
const router = new Router()
const insuranceController = require('../controllers/insuranceController')

router.post('/', insuranceController.create)
router.get('/',insuranceController.getAll)

module.exports=router