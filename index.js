var express = require('express');
var app = express();

app.get('*', function (req, res) {
    //var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //res.send(JSON.stringify(req.headers));
    
    var resTxt = '<h1>' + req.originalUrl + '</h1>';
    
    for (var name in req.headers) resTxt += name + ': ' + req.headers[name] + '<br>';
    
    
    res.send(resTxt);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
