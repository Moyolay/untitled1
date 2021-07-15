const Router = require('express')
const router = new Router()
const saleController=require('../controllers/saleController')

router.post('/', saleController.create)
router.get('/',saleController.getAll)


module.exports=router