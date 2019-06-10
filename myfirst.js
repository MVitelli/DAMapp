var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true);
  // var txt = q.year + " " + q.month;
  console.log(q.query.name);
  console.log(q.query.age);
  res.end();
  // res.end(txt);
}).listen(8080);
