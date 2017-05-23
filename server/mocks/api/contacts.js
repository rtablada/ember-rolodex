/* eslint-env node */
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

module.exports = function(app) {

  app.use('/api', middlewares);
  app.use('/api', router);
};
