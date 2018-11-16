var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

var app = express();

app.use(bodyParser.json());
app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(useragent.express());

app.get('/', function(req, res) {
	console.log(req.url);
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function(req, res, next) {
	var header = req.headers;
	var ip = req.headers.host;
	var lang = req.headers['accept-language'];
	var software = 'OS: ' + req.useragent.os + ', Browser: ' + req.useragent.browser;

	res.json({
		ipaddress: ip,
		language: lang.slice(0, lang.indexOf(',')),
		software: software
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Your app is listening on port' + port);
});

module.exports = app;
