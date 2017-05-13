// Dependencies
var Sequelize = require("sequelize");
const config = require('./config.js');
let sequel_connect;
if(process.env.JAWSDB_URL){
	sequel_connect = new Sequelize(process.env.JAWSDB_URL);
}
else{
	sequel_connect = new Sequelize(config);
}
// Creates mySQL connection using Sequelize and export
module.exports = sequel_connect;
