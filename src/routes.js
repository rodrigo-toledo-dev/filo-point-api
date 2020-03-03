const express = require('express');
const routes = express.Router();

const OperationController = require('./controllers/OperationController')

routes.get('/', OperationController.index);
routes.get('/operations', OperationController.show);
routes.post('/operations', OperationController.create);

const FileStorageController = require('./controllers/FileStorageController')

// Get data from database
routes.get('/files/:filename', FileStorageController.show);

// Storage in tmp file
routes.post('/files', FileStorageController.store);

module.exports = routes;
