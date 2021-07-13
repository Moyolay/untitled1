const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Insurance = sequelize.define('insurance',{
    id_insurance: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false}
})

const Agent = sequelize.define('agent',{
    id_agent: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING,allowNull:false}
})

const Sale = sequelize.define('sale',{
    id_sale: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    count:{type: DataTypes.INTEGER,allowNull:false, defaultValue:1},
    expiration_date:{type:DataTypes.DATE,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    first_name:{type: DataTypes.STRING,allowNull:false},
    last_name:{type: DataTypes.STRING,allowNull:false},
    name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.STRING,allowNull:false},
    address:{type: DataTypes.STRING,allowNull:false},
    state:{type:DataTypes.STRING,allowNull:false}
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
    number:{type:DataTypes.STRING,allowNull:false}
})

Car.hasMany(Sale)
Sale.belongsTo(Car)

Insurance.hasMany(Sale)
Sale.belongsTo(Insurance)

Agent.hasMany(Sale)
Sale.belongsTo(Agent)

Card.hasMany(Sale)
Sale.belongsTo(Card)


module.exports ={
    Insurance, Agent, Sale, Card, Car
}