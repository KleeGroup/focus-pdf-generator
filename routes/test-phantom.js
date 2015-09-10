
/**
 * Capture la page demandée/
 * @param  {object} request - La requête HTTP.
 * @param  {object} reply   - La response HTTP.
 * @return {undefined}
 */
function testPhantomHandler(request, reply) {
  try{
  var phantom = require('phantom');
  phantom.create(function(ph) {
    ph.createPage(function(page) {
      page.set("paperSize", { format: "A4", orientation: 'portrait', margin: '1cm' });
      reply({testPhantom: "Ok"});
    });
  }, {
    dnodeOpts: {
      weak: false
    }
  });



  
  
  }
  catch(e){
    console.log('errror phantom');
    global.winston.error(e);
    reply({error: e}).code(500);
  }
  
 
}


module.exports = {
  method: 'GET',
  path: '/test-phantom',
  config: {
    handler: testPhantomHandler
  }
};