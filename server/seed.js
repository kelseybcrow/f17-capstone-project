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
                `
                DROP TABLE IF EXISTS pain_logs;

                CREATE TABLE pain_logs (
                    id SERIAL PRIMARY KEY,
                    date VARCHAR(255),
                    severity VARCHAR(255),
                    location VARCHAR(255),
                    duration VARCHAR(255)
                    );

                    INSERT INTO pain_logs (
                        date, severity, location, duration
                    )
                    VALUES (
                        'Feb 10', 'mild', 'head and neck', 'a couple hours'
                    );

                    SELECT * FROM pain_logs;
                    INSERT INTO pain_logs (
                        date, severity, location, duration
                    )
                    VALUES (
                        'Feb 11', 'moderate', 'head, neck, and shoulders', 'several hours'
                    );

                    SELECT * FROM pain_logs;
                    INSERT INTO pain_logs (
                        date, severity, location, duration
                    )
                    VALUES (
                        'Feb 12', 'severe', 'head', 'less than an hour'
                    );

                    SELECT * FROM pain_logs;
                    `
            )
            .then((dbRes) => {
                console.log(dbRes)
                res.status(200).send(dbRes)
            })
            .catch((err) => console.log('error seeding DB', err))
    },
}
