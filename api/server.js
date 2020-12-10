const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipes/recipes-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter)

module.exports = server