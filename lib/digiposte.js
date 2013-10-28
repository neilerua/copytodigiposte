
var base_url_request = "https://secure.interop.u-post.fr/";
var digiposte= {}

digiposte.app = function(config) {
	var app_key = config.app_key;
	var app_secret = config.app_secret;
	var app_callbackURL = config.app_callbackURL;
	
	return {
		//Returns the authorize URL
		requesttoken: function(cb) {
			var obj ={};
			obj.authorize_url = base_url_request + "oauth/authorize?response_type=code&client_id="+app_key+"&redirect_uri="+encodeURIComponent(app_callbackURL);
			cb(obj);
		}
	}
}
module.exports = digiposte;