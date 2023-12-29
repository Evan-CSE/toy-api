const TourService = require('../Service/Tour.Service');

const getAllTour = async (req, res) => {
    const result = await TourService.getAllTour();
    res.status(200).send(result);
}

const insertNewTour = async (req, res) => {
    const result = await TourService.insertNewTour(req.body);
    if (result._id) {
        res.status(200).send('Data inserted successfully');
    } else {
        res.status(500).send('Something went wrong');
    }
};

const getTourById = async (req, res) => {
    const result = await TourService.getTourById(req.params.id);
    if (result) {
        updateTourById(result.id, { visitCount: result.visitCount + 1 })
    }
    res.status(200).send(result);
};

const updateTourById = async (req, res) => {
    const updateResult = await TourService.updateTourById(req.params.id, req.body);
    if (!updateResult.modifiedCount) {
        return res.status(500).send("Couldn't update data or data doesn't exist");
    } else {
        return res.status(200).send('updated successfully');
    }
};

const getTrendingTour = async (req, res) => {
    const result = await TourService.getTrendingTour();
    console.log(result);
    res.status(200).send(result);
};

const getCheapestTour = async (req, res) => {
    const result = await TourService.getCheapestTour();
    console.log(result);
    res.status(200).send(result);
};

module.exports = {
    getAllTour,
    getCheapestTour,
    getTourById,
    getTrendingTour,
    updateTourById,
    insertNewTour
};