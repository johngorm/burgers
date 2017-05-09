const router = require('express').Router();


var Burger = require("../model/burger.js");

//Get 
router.get('/', function(req, res){
	Burger.findAll({})
		.then(function(result){
			res.json(result);
		})
});


