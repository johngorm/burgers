// Dependencies
var Sequelize = require("sequelize");
const config = require('./config.js');

// Creates mySQL connection using Sequelize and export
module.exports = new Sequelize(config);

