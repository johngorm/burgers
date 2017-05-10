const router = require('express').Router();


var Burger = require("../models/burger.js");


router.get('/', function(req, res){
	Burger.findAll({})
	.then( function(result){
		let dbRecordsObject = {
			burgers: result
		};
		res.render('index', dbRecordsObject);
	});
});

	//route to add new burger to webpage
router.post('/', function(req, res){

	Burger.create({ burger_name : req.body.burger_name})
		.then(function(result){
			console.log(result)
			res.redirect('/');
		});
});
//route to change burger status "devoured" to true

router.put('/:id', function(req, res){
	Burger.update(
	{ devoured: true},
	{ where:
		{
			id: req.params.id
		}
	}).spread(function(result, affectedRows){
		res.redirect('/');
	});
});

module.exports = router;



// Burger.update(
// 	{ devoured: false},
// 	{ where: 
// 		{
// 			id: 3
// 		}
// 	}).spread(function(result, affectedRows){
// 		console.log('affectedRows', affectedRows)
// 		return Burger.findAll();
// 	}).then(function(burgers){
// 		console.log(burgers);
// 	});

// Burger.findAll({})
// 	.then(function(result){
// 		console.log(JSON.parse(JSON.stringify(result)));
// 	})

// Burger.findAll({
// 	where:{
// 		burger_name: 'Black Bean Burger'
// 	}
// }).then(function(result){
// 	console.log(JSON.parse(JSON.stringify(result)));
// });

