/*global window*/
var config = require('../../config');
module.exports = function(params, cb) {

  var url = params.url,
    filePath = params.filePath,
    userInfos = params.userInformations;
  //Validate parameters.

  //Call the phantomjs program
  var phantom = require('phantom');

  phantom.create(function(ph) {
    ph.createPage(function(page) {
      //Page initialization.
      page.set("paperSize", { format: "A4", orientation: 'portrait', margin: '1cm' });
      //Navigation to the desired url.
      page.open(url, function(status) {
        if (status !== 'success') {
          ph.exit(1);
          throw new Error('Unable to load the address!');
        } else {
          //Wait for timeToRender ms or 2 s to let the page load.
          //Save the page to filePath
          setTimeout(function() {
            page.render(filePath);
            cb({
              url: url,
              filePath: filePath
            });
            ph.exit();
          }, config.timeToRender || 2000);
        }
      });
    });
  }, {
    dnodeOpts: {
      weak: false
    }
  });

};