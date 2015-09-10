var pdfCapture = require('./pdf-capture');
var Promise = require('promise');
/**
 * Réalise la capture d'une page
 * @param  {[type]} url              [description]
 * @param  {[type]} filePath         [description]
 * @param  {[type]} userInformations - User informations for the login: {login: "myLogin", password: "*****"}
 * @return {undefined}
 */
module.exports = function(url, filePath, userInformations) {
  return new Promise(function(resolve, reject) {
    try {
      pdfCapture({
      url: url,
      filePath: filePath,
      userInformations: userInformations
    }, resolve);
    } catch (e) {
      reject(e);
    }

  });
};