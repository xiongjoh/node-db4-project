const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipes/recipes-router')
const ingredientsRouter = require('./ingredients/ingredients-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

module.exports = server