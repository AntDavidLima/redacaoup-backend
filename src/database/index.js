const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const School = require('../models/School');

const connection = new Sequelize(dbConfig);

School.init(connection);

module.exports = connection;
