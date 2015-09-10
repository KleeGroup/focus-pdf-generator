var CaptureEngine = require('../lib/capture-engine');
var config = require('../config');
/**
 * Capture la page demandée/
 * @param  {object} request - La requête HTTP.
 * @param  {object} reply   - La response HTTP.
 * @return {undefined}
 */
function capturePage(request, reply) {
  var criteria = request.payload;
  var url = criteria.url,
    filePath = criteria.filePath;
  CaptureEngine.process(url, filePath, config.user)
    .then(function(data) {
      reply(data);
    }, function(err) {
      reply({
        error: JSON.stringify(err)
      }).code(500);
    });
}


module.exports = {
  method: 'POST',
  path: '/capture',
  config: {
    handler: capturePage
  }
};