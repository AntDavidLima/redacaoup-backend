const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const StudentController = require('./controllers/StudentController');
const ThemeController = require('./controllers/ThemeController');

routes.post('/schools', SchoolController.store);
routes.post('/schools/:school_id/students', StudentController.store);
routes.post('/schools/:school_id/themes', ThemeController.store);

module.exports = routes;
