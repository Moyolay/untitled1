const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Insurances = sequelize.define('insurance',{
    id_insurance: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING, allowNull:false}
})

const Agents = sequelize.define('agent',{
    id_agent: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    first_name:{type: DataTypes.STRING,allowNull:false},
    last_name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,unique:true,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false}
})

const Sales = sequelize.define('sale',{
    id_sale: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    count:{type: DataTypes.INTEGER,allowNull:false, defaultValue:1},
    expiration_date:{type:DataTypes.DATE,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false, defaultValue:500},
    first_name:{type: DataTypes.STRING,allowNull:false},
    last_name:{type: DataTypes.STRING,allowNull:false},
    name:{type: DataTypes.STRING,allowNull:false},
    phone:{type: DataTypes.STRING,allowNull:false},
    address:{type: DataTypes.STRING,allowNull:false},
    state:{type:DataTypes.STRING,allowNull:false}
})


const Cars = sequelize.define('car',{
    id_car: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    brand:{type: DataTypes.STRING,allowNull:false},
    model:{type: DataTypes.STRING,allowNull:false},
    vin:{type: DataTypes.STRING},
    gos_number:{type: DataTypes.STRING}
})

const Cards = sequelize.define('card',{
    id_card: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type: DataTypes.STRING,allowNull:false}
})

const Users = sequelize.define('users',{
    id_user: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false}
})

Cars.hasMany(Sales)
Sales.belongsTo(Cars)

Insurances.hasMany(Sales)
Sales.belongsTo(Insurances)

Agents.hasMany(Sales)
Sales.belongsTo(Agents)

Cards.hasMany(Sales)
Sales.belongsTo(Cards)

Users.hasMany(Agents)
Agents.belongsTo(Users)


module.exports ={
    Insurances, Agents, Sales, Cards, Cars, Users
}