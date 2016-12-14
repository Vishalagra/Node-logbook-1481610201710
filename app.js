/*eslint-env node */
//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');



// create a new express server
var app = express();
var http = require('http');
var fs = require('fs');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 http.createServer(/* @callback */ function (req, res) {
 	

});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

function displayForm(res) {
    fs.readFile('index.html', /* @callback */ function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
    

}

app.post('/login', function(req,res){
	console.log("inside post");
	console.log(JSON.stringify(req.body));
	var contents =JSON.stringify(req.body);
	var jsonContent = JSON.parse(contents);
	
	console.log('req.body.username', req.body['username']);
	console.log('jsonContent.username',jsonContent.username);
	console.log('req.body.username'+'from json', jsonContent.username);
	
	var userlogin=req.body.username;
	var pwd = req.body.password;
	if(userlogin==='skat'){
		res.redirect('logEntry.html');
	}
	else if(userlogin==='kontrol'){
		res.redirect('logQuery.html');
	}else{
		
		res.redirect('error.html');
	}
	
});

app.post('/logEntry', function(req,res){
	
	console.log(JSON.stringify(req.body));
	
	console.log('redirect to logQuery');
	res.redirect('logQuery.html');
		
});
