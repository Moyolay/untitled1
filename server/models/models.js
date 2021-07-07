const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Insurance = sequelize.define('insurance',{
    id_insurance: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING,}
})

const Agent = sequelize.define('agent',{
    id_agent: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING},
    phone:{type: DataTypes.INTEGER}
})

const Sale = sequelize.define('sale',{
    id_sale: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    date_sale:{type: DataTypes.DATE},
    count:{type: DataTypes.INTEGER}
})

const Client = sequelize.define('client',{
    id_client: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    first_name:{type: DataTypes.STRING},
    last_name:{type: DataTypes.STRING},
    name:{type: DataTypes.STRING},
    phone:{type: DataTypes.INTEGER},
    address:{type: DataTypes.STRING}
})

const Car = sequelize.define('car',{
    id_car: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    brand:{type: DataTypes.STRING},
    model:{type: DataTypes.STRING},
    vin:{type: DataTypes.STRING},
    gos_number:{type: DataTypes.STRING}
})

const Card = sequelize.define('card',{
    id_card: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING},
    price:{type: DataTypes.INTEGER}
})

Car.hasMany(Client)
Client.belongsTo(Car)

Insurance.hasMany(Agent)
Agent.belongsTo(Insurance)

Client.hasMany(Sale)
Sale.belongsTo(Client)

Agent.hasMany(Sale)
Sale.belongsTo(Agent)

Card.hasMany(Sale)
Sale.belongsTo(Card)

module.exports ={
    Insurance, Agent, Sale, Card, Car, Client
}