const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');

routes.post('/schools', SchoolController.store);

module.exports = routes;
