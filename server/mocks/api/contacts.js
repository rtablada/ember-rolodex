/* eslint-env node */
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const bodyParser = require('body-parser');
const yayson = require('yayson')({
  adapter: 'default'
});

const {Presenter, Store} = yayson;
const store = new Store();

module.exports = function(app) {
  router.render = function render(req, res) {
    const data = res.locals.data;
    const [_ignore, type] = req.url.split('/');
    class ResourcePresenter extends Presenter {}
    ResourcePresenter.prototype.type = type;

    res.json(ResourcePresenter.render(data));
  }
  app.use('/api', bodyParser.json());
  app.use('/api', middlewares);
  app.use('/api', (req, res, next) => {
    const method = req.method.toString();

    if (method !== 'GET' && method !== 'DELETE') {
      const data = store.sync(req.body);
      delete data.id;
      delete data.type;

      req.body = data;
    }

    next();
  });
  app.use('/api', router);
};
