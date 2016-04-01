var Seguridad = function(conf){
	conf = conf || {};
}

function logError(err, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Error: " + err);
    res.end();
}  

Seguridad.prototype.see = function(res, object){
	/*res.render('article_see', object);*/
	if (object.error) { logError(object.error, res); return; }
	
	if (object.result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(object.result));
		res.end();
	}
	else {
	}
}
Seguridad.prototype.add = function(res, object){
	/*res.render('article_add', object);*/
}
Seguridad.prototype.edit = function(res, object){
	/*res.render('article_edir', object);*/
}
Seguridad.prototype.list = function(res, object){
	/*res.render('article_list', object);*/
}

module.exports = Seguridad; 
