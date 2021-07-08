const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Insurance = sequelize.define('insurance',{
    id_insurance: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false}
})

const Agent = sequelize.define('agent',{
    id_agent: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.BIGINT,allowNull:false}
})

const Sale = sequelize.define('sale',{
    id_sale: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    date_sale:{type: DataTypes.DATE,allowNull:false},
    count:{type: DataTypes.BIGINT,allowNull:false},
    date_beging:{type:DataTypes.DATE,allowNull:false},
    expiration_date:{type:DataTypes.DATE,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false}
})

const Client = sequelize.define('client',{
    id_client: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    first_name:{type: DataTypes.STRING,allowNull:false},
    last_name:{type: DataTypes.STRING,allowNull:false},
    name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.BIGINT,allowNull:false},
    address:{type: DataTypes.STRING,allowNull:false}
})

const Car = sequelize.define('car',{
    id_car: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    brand:{type: DataTypes.STRING,allowNull:false},
    model:{type: DataTypes.STRING,allowNull:false},
    vin:{type: DataTypes.STRING},
    gos_number:{type: DataTypes.STRING}
})

const Card = sequelize.define('card',{
    id_card: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING,allowNull:false},
    number:{type:DataTypes.BIGINT,allowNull:false}
})

Car.hasMany(Sale)
Sale.belongsTo(Car)

Insurance.hasMany(Sale)
Sale.belongsTo(Insurance)

Client.hasMany(Sale)
Sale.belongsTo(Client)

Agent.hasMany(Sale)
Sale.belongsTo(Agent)

Card.hasMany(Sale)
Sale.belongsTo(Card)


module.exports ={
    Insurance, Agent, Sale, Card, Car, Client
}