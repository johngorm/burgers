const connection = require('./connection.js');
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

let orm = {

	selectAll: function(table, callback){
		let queryString = 'SELECT * FROM ??';
		connection.query(queryString, table, function(err, result){
			if(err){
				throw err;
			}
			else{
				callback(result);
			}
		});
	},

	insertOne: function(table, columns, vals, callback){
		let queryString = 'INSERT INTO ?? (';
		queryString += columns.toString();
		queryString += ') VALUES (';
		queryString += connection.escape(vals);
		queryString += ');';

		connection.query(queryString, table, function(err, result){
			if(err){
				throw err;
			}
			else{
				callback(result);
			}
		});

	},

	updateOne: function(table, updateColVals, condition, callback){
		let queryString = 'UPDATE ?? SET ';
		queryString += connection.escape(updateColVals);
		queryString += ' WHERE ';
		queryString += connection.escape(condition);
		connection.query(queryString, table, function(err, result){
			if (err){
				throw err;
			}
			else{
				callback(result);
			}
		});

	}
};

//Test ORM functions

orm.selectAll('burgers', function(data){
	console.log('Select all from burgers\n' + JSON.stringify(data));
});

orm.insertOne('burgers', 'burger_name', 'Little Swiss Sunshine Burger', function(data){
	console.log("Insert funciton\n" + JSON.stringify(data));
});

orm.updateOne('burgers', {devoured: true}, {id: 4}, function(data){
	console.log("UPDATE\n" + JSON.stringify(data));
});

module.exports = orm;