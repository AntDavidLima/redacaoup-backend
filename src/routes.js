const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const StudentController = require('./controllers/StudentController');

routes.post('/schools', SchoolController.store);
routes.post('/schools/:school_id/students', StudentController.store);

module.exports = routes;
