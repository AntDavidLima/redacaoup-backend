const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const School = require('../models/School');
const Student = require('../models/Student');

const connection = new Sequelize(dbConfig);

School.init(connection);
Student.init(connection);

Student.associate(connection.models);

module.exports = connection;
