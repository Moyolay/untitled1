const {Insurance} = require('../models/models')
const ApiError = require('../error/ApiError')
class InsuranceController {
    async create(req,res) {
        const {name}=req.body
        const insurance = await Insurance.create({name})
        return res.json(insurance)

    }

    async getAll(req,res) {
        const insurances = await Insurance.findAll()
        return res.json(insurances)

    }

}

module.exports = new InsuranceController()