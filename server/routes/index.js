const Router = require('express')
const router = new Router()
const agentRouter=require('./agentRouter')
const cardRouter=require('./cardRouter')
const carRouter=require('./carRoutes')
const insuranceRouter=require('./insuranceRouter')
const saleRouter=require('./saleRouter')


router.use('/insurance', insuranceRouter)
router.use('/agent', agentRouter)
router.use('/sale',saleRouter)
router.use('/card',cardRouter)
router.use('/car',carRouter)

module.exports=router