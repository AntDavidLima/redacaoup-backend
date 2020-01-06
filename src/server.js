const express = require('express');

const routes = require('./routes');

require('./database');

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333);
