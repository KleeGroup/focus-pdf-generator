/*global global*/
//Chargement des dépendances.
var hapi = require('hapi');
//Configuration du serveur.
var config = require('./config.json');
var server = new hapi.Server(config.domain, config.port, config.options);
var routes = require('./routes');
//Enregistrement des routes.
server.route(routes);
//Démarrage du serveur.
server.start(function() {
  console.log('Server started at: ' + server.info.uri);
  console.log('Available routes: ');
  for(var i = 0; i < routes.length; i++){
    var rt = routes[i];
      console.log('URL: ', rt.path , ' VERB: ', rt.method);
  }
});