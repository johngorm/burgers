const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressHandlebars = require('express-handlebars');
let route = require('./controllers/burgers_controller.js');

let app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');


app.use('/', route);

app.listen(app.get('port'), function(err){
	if(err){
		throw err;
	}
	else{
		console.log("App listening on port " , app.get('port'));;
	}
});


