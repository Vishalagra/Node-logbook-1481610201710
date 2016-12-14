/*eslint-env node */

/**
 * Generated Node.js application that can run on IBM Bluemix
 */

var http = require("http");
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

var appport = process.env.VCAP_APP_PORT || 8888;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() === 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() === 'post') {
        processAllFieldsOfTheForm(req, res);
    }
   /* if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

        fs.readFile(__dirname + '/public/js/script.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });

      }*/

     /* if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

        fs.readFile(__dirname + '/public/stylesheets/stylePage.css', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });

      }*/

});



function displayForm(res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function ( fields) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields
        }));
    });
}



server.listen(appport);
