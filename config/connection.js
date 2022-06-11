const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to the database
const sequelize = process.env.JAWASDB_URL
  ? new Sequelize(process.env.JAWASDB_URL)
  : new Sequelize(process.env.DB_Name, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3636
});

module.exports = sequelize;