const ApiError=require('../error/ApiError')
const {Car}=require('../models/models')
class CarController {
    async create(req,res, next) {
        try {
            const {brand, model,vin, gos_number} =req.body
            const car = await Car.create({brand,model,vin,gos_number})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }

    }

    async getAll(req,res) {
        const cars = await Car.findAll()
        return res.json(cars)

    }

}

module.exports = new CarController()