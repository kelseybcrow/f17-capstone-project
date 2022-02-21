const Sequelize = require('sequelize')
const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})

module.exports = {
    seed: (req, res) => {
        // res.status(200).send('success')

        sequelize
            .query(
                `DROP TABLE IF EXISTS pain_logs;
                
                CREATE TABLE pain_logs (
                    pain_log_id SERIAL PRIMARY KEY,
                    date VARCHAR(255),
                    severity VARCHAR(255),
                    location VARCHAR(255),
                    duration VARCHAR(255)
                    )`
            )
            .then((dbRes) => {
                console.log(dbRes)
                res.sendStatus(200).send(dbRes)
            })
            .catch((err) => console.log('error seeding DB', err))
    },
}
