const ApiError=require('../error/ApiError')
const {Client}=require('../models/models')
class ClientController {
    async create(req,res) {
        const {first_name, last_name, name, phone, address}=req.body
        const client = await Client.create({first_name, last_name, name, phone, address})
        return res.json(client)
    }

    async getAll(req,res) {
        const clients = await Client.findAll()
        return res.json(clients)

    }

}

module.exports = new ClientController()