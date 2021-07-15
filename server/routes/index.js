const Router = require('express')
const router = new Router()
const agentRouter=require('./agentRouter')
const cardRouter=require('./cardRouter')
const carRouter=require('./carRoutes')
const insuranceRouter=require('./insuranceRouter')
const saleRouter=require('./saleRouter')
const userRouter=require('./userRouter')


router.use('/insurance', insuranceRouter)
router.use('/agent', agentRouter)
router.use('/sale',saleRouter)
router.use('/card',cardRouter)
router.use('/car',carRouter)
router.use('/user',userRouter)

module.exports=router