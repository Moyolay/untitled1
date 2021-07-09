const ApiError=require('../error/ApiError')
const {Card}=require('../models/models')

class CardController {
    async create(req,res) {
        const {name, number}=req.body
        const card = await Card.create({name, number})
        return res.json(card)
    }

    async getAll(req,res) {
        const cards = await Card.findAll()
        return res.json(cards)
    }

}

module.exports = new CardController()