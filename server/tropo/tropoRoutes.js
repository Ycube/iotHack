var tropoController = require('./tropoController.js');

module.exports = (app) => {
  app.get('/', tropoController.testGet);
  app.post('/', tropoController.testPost);
};
