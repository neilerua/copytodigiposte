var http = require("http");
var url = require("url");
var querystring = require("querystring");
 
var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200);
	var code = url.query;
	
	if (page == '/digiposte') {
        res.write("La réponse de Digiposte : "+params["code"]);
    }
    else if (page == '/dropbox') {
        res.write("La réponse de Dropbox : "+params["code"]);
    } 
	res.end();
});
server.listen(8080);