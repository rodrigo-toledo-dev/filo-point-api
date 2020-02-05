const express = require('express');
const routes = express.Router();

const OperationController = require('./controllers/OperationController')

routes.get('/operations', OperationController.index);
routes.get('/operations/:employee', OperationController.show);
routes.post('/operations', OperationController.store);

module.exports = routes;