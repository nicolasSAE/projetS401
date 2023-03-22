require('dotenv').config();
module.exports = {
    hostname: process.env.DB_HOST || "localhost",
    user: process.env.DB_USERNAME || "theo",
    password: process.env.DB_PASSWORD || "3630",
    database: process.env.DB_DATABASE || "bdd_service",
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    pool: {
    max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};