const express = require('express');
const cors = require('cors');
const TourRoutes = require('./Routes/Tour.Routes');
const { model } = require('mongoose');

const APP = express();

APP.use(express.json());
APP.use(cors());
APP.use('/tours', TourRoutes)

module.exports = APP;