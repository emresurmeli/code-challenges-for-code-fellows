var http = require('http'),
    fs = require('fs'),
    host = '127.0.0.1',
    port = '8000';

function Server (err, html) {
    if (err) {
        throw err;
        console.log('There was an error, plz fix..')
    }
    http.createServer( function (req, res) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(html);
        res.end();
    }).listen(port, host, function () {
    console.log('Server running on http://' + host + ':' + port)
  })
};

fs.readFile('./index.html', Server);