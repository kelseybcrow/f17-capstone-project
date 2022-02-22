require('dotenv').config()
const { CONNECTION_STRING } = process.env
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
    getPastLogs: (req, res) => {
        sequelize
            .query(
                `
            SELECT * FROM pain_logs

                `
            )
            .then((dbRes) => {
                res.status(200).send(dbRes[0])
                console.log(dbRes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },

    createNewLog: (req, res) => {
        const { date, severity, location, duration } = req.body
        console.log(req.body)
        // console.log(req.params)

        sequelize
            .query(
                `
                INSERT INTO pain_logs (date, severity, location, duration)
                VALUES ('${date}', '${severity}', '${location}', '${duration}')
            `
            )
            .then((dbRes) => res.status(200).send(dbRes[0]))
            .catch((err) => console.log(err))
    },
}
