const ApiError=require('../error/ApiError')
const {Sale}=require('../models/models')
class SaleController {
    async create(req,res) {
        const {date_sale,count,date_beging,expiration_date,price,carIdCar,insuranceIdInsurance,clientIdClient,agentIdAgent,cardIdCard}=req.body
        const sale = await Sale.create({date_sale,count,date_beging,expiration_date,price,carIdCar,insuranceIdInsurance,clientIdClient,agentIdAgent,cardIdCard})
        return res.json(sale)

    }

    async getAll(req,res) {
        let {carIdCar,insuranceIdInsurance,clientIdClient,agentIdAgent,cardIdCard, limit,page} = req.query
        page=page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let sales
        if (!carIdCar && !insuranceIdInsurance && !clientIdClient && !agentIdAgent && !cardIdCard) {
            sales=await Sale.findAndCountAll({limit,offset})
        }
        if (carIdCar && !insuranceIdInsurance && !clientIdClient && !agentIdAgent && !cardIdCard){
            sales=await Sale.findAndCountAll({where:{carIdCar}, limit, offset})
        }
        if (!carIdCar && insuranceIdInsurance && !clientIdClient && !agentIdAgent && !cardIdCard){
            sales=await Sale.findAndCountAll({where:{insuranceIdInsurance}, limit, offset})
        }
        if (!carIdCar && !insuranceIdInsurance && clientIdClient && !agentIdAgent && !cardIdCard){
            sales=await Sale.findAndCountAll({where:{clientIdClient}, limit, offset})
        }
        if (!carIdCar && !insuranceIdInsurance && !clientIdClient && agentIdAgent && !cardIdCard){
            sales=await Sale.findAndCountAll({where:{agentIdAgent}, limit, offset})
        }
        if (!carIdCar && !insuranceIdInsurance && !clientIdClient && !agentIdAgent && cardIdCard){
            sales=await Sale.findAndCountAll({where:{cardIdCard}, limit, offset})
        }
        if (carIdCar && insuranceIdInsurance && clientIdClient && agentIdAgent && cardIdCard){
            sales=await Sale.findAndCountAll({where:{carIdCar, insuranceIdInsurance, clientIdClient, agentIdAgent, cardIdCard}, limit, offset})
        }
        return res.json(sales)

    }

    /*async getOne(req, res){

    }*/

}

module.exports = new SaleController()