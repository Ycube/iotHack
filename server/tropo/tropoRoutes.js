var tropoController = require('./tropoController.js');

module.exports = (app) => {
  // app.get('/getAllUsers', userController.getAllUsers);
  app.post('/', tropoController.test);
};
