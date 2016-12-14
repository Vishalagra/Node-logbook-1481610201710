/*eslint-env node, express*/
var http=require('http');
var express=require('express');
var fs=require('fs');


var app=express();
var bodyParser = require('body-parser')
app.use( bodyParser.urlencoded({extended: true}));

var server=http.createServer(app);
server.listen(app.get('port'));

/*http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});  
*/
app.get('/', function(request,response){
fs.readFile('login.html', function(Error,Res){
if(!Error)
{
response.writeHead(200,{'content-type':'text/html'});
response.write(Res);
}
});
});


app.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var role1 = "Role1";
    var role2 = "Role2";

    if (username=='skat' && password == 'eIndkomst') {
           // do something here with a valid login
    	res.redirect('/welcomeSkat.html');

    } else if(username=='admin' && password == 'eIncome') { 
    	res.redirect('/welcomeAdmin.html');
    }
});

app.post('/welcomeSkat', function(req, res) {
 
});
