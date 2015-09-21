var express = require('expres');
var bodyParser = require('body-parser');
var logger = require('log4js');

var config = {
    port: 6001
};

var app = express();

app.use(bodyParser);

// CORS
app.use(function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', 'authorization, origin, content-type, accept');
    res.append('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE');

    next();
});




app.listen(config.port);
