const express = require('express');
const routes = express.Router();

const OperationController = require('./controllers/OperationController')

routes.get('/operations', OperationController.index);
routes.get('/operations/:employee', OperationController.show);
routes.post('/operations', OperationController.store);



const FileStorageController = require('./controllers/FileStorageController')

// Get data from database
routes.get('/files/:filename', FileStorageController.show);

// Storage in tmp file
routes.post('/files', FileStorageController.store);

module.exports = routes;
