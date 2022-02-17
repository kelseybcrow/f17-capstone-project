const { CONNECTION_STRING } = process.env
const { user } = require('pg/lib/defaults')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})

module.exports = {}
