//Dependncies
const Sequelize = require('sequelize');

const sequelize_connect = require('../config/connection.js');

let Burger = sequelize_connect.define('burger',{
	burger_name:{
		type: Sequelize.STRING
	},
	devoured:{
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
});

Burger.sync();

module.exports = Burger;