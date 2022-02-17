require('dotenv').config()
const { CONNECTION_STRING } = process.env
// const { user } = require('pg/lib/defaults')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})

module.exports = {
    createNewLog: (req, res) => {
        console.log(req.body)
        console.log(req.params)
        const { date, severity, location, duration } = req.body

        sequelize
            .query(
                `
                INSERT INTO logs (date, severity, location, duration)
                VALUES (${date}, '${severity}', '${location}', '${duration}')
            `
            )
            .then((dbRes) => res.status(200).send(dbRes[0]))
            .catch((err) => console.log(err))
    },

    getPastLogs: (req, res) => {
        sequelize.query(
            `
            SELECT * FROM logs

                `
        )
    },
}
