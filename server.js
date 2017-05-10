const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressHandlebars = require('express-handlebars');
let route = require('./controllers/burgers_controller.js');

const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/', route);

app.listen(PORT, function(err){
	if(err){
		throw err;
	}
	else{
		console.log("App listening on port " + PORT);
	}
});


