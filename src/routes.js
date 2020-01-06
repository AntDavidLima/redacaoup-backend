const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const StudentController = require('./controllers/StudentController');
const ThemeController = require('./controllers/ThemeController');
const EssayController = require('./controllers/EssayController');

routes.post('/schools', SchoolController.store);
routes.post('/schools/:school_id/students', StudentController.store);
routes.post('/schools/:school_id/themes', ThemeController.store);
routes.post('/students/:student_id/themes/:theme_id/essays', EssayController.store);

module.exports = routes;
