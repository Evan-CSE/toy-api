const { getAllTour, getCheapestTour, getTourById, getTrendingTour, insertNewTour, updateTourById } = require('../Controller/Tour.Controller')

const express = require('express');


const TourRoutes = express.Router();

TourRoutes.get('/', getAllTour);

TourRoutes.post('/', insertNewTour);

TourRoutes.get('/trending', getTrendingTour);

TourRoutes.get('/cheapest', getCheapestTour);

TourRoutes.get('/:id', getTourById);

TourRoutes.patch('/:id', updateTourById);


module.exports = TourRoutes;