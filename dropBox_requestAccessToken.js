var config = require("./config");
var fs = require("fs");

//*****************************************************************
//Demande du request token Dropbox pour obtenir l'URL d'association
//*****************************************************************

//Instanciation de l'objet Dropbox
var dbox = require ("dbox");
var app_db = dbox.app(config.dropboxAppParams);

//Instanciation de l'objet Digiposte
var digiposte = require ("./digiposte");
var app_dgp = digiposte.app(config.dropboxAppParams);

app_db.requesttoken(function(status, request_token){
	console.log("Dropbox - Lien d'association :" + request_token.authorize_url);
});
//*****************************************************************

//*****************************************************************
//Demande du request token Digiposte pour obtenir l'URL d'association
//*****************************************************************
app_dgp.requesttoken(function(request_token){
	console.log("Digiposte - Lien d'association : " + request_token.authorize_url);
});
