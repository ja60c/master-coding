// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes')

// SERVER SETTINGS / MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// ENDPOINT
app.use('/api/v1', routes);

module.exports = app;