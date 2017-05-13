//Dependncies
const Sequelize = require('sequelize');

const sequelize_connect = require('../config/connection.js');

let Burger = sequelize_connect.define('burger',{
	burger_name:{
		type: Sequelize.STRING,
		validate: {
			len: {
				args: [1,50],
				msg: 'Burger name must be between 1 and 50 letter'
			}
		}
	},
	devoured:{
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
});

Burger.sync();

module.exports = Burger;