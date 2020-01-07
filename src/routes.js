const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const StudentController = require('./controllers/StudentController');
const ThemeController = require('./controllers/ThemeController');
const EssayController = require('./controllers/EssayController');

// School routes
routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.index);
routes.get('/schools/:school_id', SchoolController.show);
routes.delete('/schools/:school_id', SchoolController.destroy);
routes.put('/schools/:school_id', SchoolController.update);

routes.post('/schools/:school_id/students', StudentController.store);
routes.post('/schools/:school_id/themes', ThemeController.store);
routes.post('/students/:student_id/themes/:theme_id/essays', EssayController.store);

module.exports = routes;
