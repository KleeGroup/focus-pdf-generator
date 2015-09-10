var config = require('../config');
/**
 * Capture la page demandée/
 * @param  {object} request - La requête HTTP.
 * @param  {object} reply   - La response HTTP.
 * @return {undefined}
 */
function testPNGHandler(request, reply) {
  //var criteria = {url: config.urlTest, filePath: "test"+new Date().toISOString().slice(0,10)+".pdf"};
  var CaptureEngine = require('../lib/capture-engine');
  var url = config.urlTest,
    filePath = config.filePathTest+"test"+new Date().toISOString().slice(0,10)+".png";
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
  method: 'GET',
  path: '/test-png',
  config: {
    handler: testPNGHandler
  }
};