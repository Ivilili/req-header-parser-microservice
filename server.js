var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('Hello World!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Your app is listening on port ' + port);
});

module.exports = app;
