const express = require('express');

const routes = express.Router();

const SchoolController = require('./controllers/SchoolController');
const StudentController = require('./controllers/StudentController');
const ThemeController = require('./controllers/ThemeController');
const EssayController = require('./controllers/EssayController');

// Schools routes
routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.index);
routes.get('/schools/:school_id', SchoolController.show);
routes.delete('/schools/:school_id', SchoolController.destroy);
routes.put('/schools/:school_id', SchoolController.update);

// Students routes
routes.post('/schools/:school_id/students', StudentController.store);
routes.get('/schools/:school_id/students', StudentController.index);
routes.get('/students/:student_id', StudentController.show);
routes.delete('/students/:student_id', StudentController.destroy);
routes.put('/students/:student_id', StudentController.update);

// Themes routes
routes.post('/schools/:school_id/themes', ThemeController.store);
routes.get('/schools/:school_id/themes', ThemeController.index);
routes.get('/themes/:theme_id', ThemeController.show);
routes.delete('/themes/:theme_id', ThemeController.destroy);
routes.put('/themes/:theme_id', ThemeController.update);

// Essays route
routes.post('/students/:student_id/themes/:theme_id/essays', EssayController.store);
routes.get('/students/:student_id/essays', EssayController.index);
routes.get('/essays/:essay_id', EssayController.show);

module.exports = routes;
