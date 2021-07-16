const ApiError=require('../error/ApiError')
const {Agent} = require('../models/models')
class AgentController {

    async create(req,res, next){
        try {
            const {name,phone} = req.body

            const agent = await Agent.create({name, phone})

            return res.json(agent)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req,res) {
        const agents = await Agent.findAll()
        return res.json(agents)

    }

}

module.exports = new AgentController()