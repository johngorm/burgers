const mysql = require('mysql');

//May need to set dateStrings to TRUE to get TIMESTAMP back as string
let connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
});

connection.connect(function(err){
	if(err){
		console.log('Error connecting to database');
		throw err;
	}
	else{
		console.log('Connection to database established');
	}
});

module.exports = connection;