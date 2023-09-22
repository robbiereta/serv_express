import { Router } from 'express';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const Precios = new Router();

Router.get('/', (req, res) => {

    res.send('precios')

});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = Precios;
