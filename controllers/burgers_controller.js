const router = require('express').Router();


var Burger = require("../models/burger.js");

//Get 
// router.get('/', function(req, res){
// 	Burger.findAll({})
// 		.then(function(result){
// 			res.json(result);
// 		});
// });

Burger.findAll({})
	.then(function(result){
		console.log(JSON.stringify(result));
	})


