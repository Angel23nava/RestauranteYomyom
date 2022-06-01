import { Sequelize } from "sequelize";

const db = new Sequelize ('DBRestaurant', 'root' ,'', {
    host:'localhost',
    dialect: 'mysql'
})

export default db


