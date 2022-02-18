const Sequelize = require('sequelize';
const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = {
    seed: (req, res) => {
        sequelize
            .query(
                `
                CREATE TABLE "public.Auth" (
	                "auth_id" serial NOT NULL,
	                "email" serial(255) NOT NULL,
	                "password_hash" varchar(1000) NOT NULL,
	                CONSTRAINT "Auth_pk" PRIMARY KEY ("auth_id")
                ) WITH (
                OIDS=FALSE
                );

                CREATE TABLE "public.Users" (
                    "user_id" serial NOT NULL,
                    "first_name" varchar(255) NOT NULL,
                    "last_name" varchar(255) NOT NULL,
                    "auth_id" integer NOT NULL,
                    CONSTRAINT "Users_pk" PRIMARY KEY ("user_id")
                ) WITH (
                OIDS=FALSE
                );

                CREATE TABLE "public.pain_logs" (
                    "log_id" serial NOT NULL,
                    "user_id" integer NOT NULL,
                    "date" varchar(255) NOT NULL,
                    "severity" integer NOT NULL,
                    "location" varchar(255) NOT NULL,
                    "duration" varchar(255) NOT NULL,
                    CONSTRAINT "pain_logs_pk" PRIMARY KEY ("log_id")
                ) WITH (
                OIDS=FALSE
                );

                ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("auth_id") REFERENCES "Auth"                ("auth_id");

                ALTER TABLE "pain_logs" ADD CONSTRAINT "pain_logs_fk0" FOREIGN KEY ("user_id")              REFERENCES "Users"("user_id");
                `
            )
            .then(() => {
                console.log('DB seeded!');
                res.sendStatus(200);
            })
            .catch((err) => console.log('error seeding DB', err));
    },
};

