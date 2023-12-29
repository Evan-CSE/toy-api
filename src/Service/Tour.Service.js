const TourModel = require('../Model/TourTableSchema');

const getAllTour = async () => {
    try {
        const result = 
            await TourModel.find({});
        return result;
    } catch (err) {
        console.log(`Something went wrong` + err);
        return err;
    }
};

const updateTourById = async (id, data) => {
    try {
        const updateResult =
            await TourModel.updateOne({ id: id }, { $set: data }, {
                runValidator: true
            });
        console.log(updateResult);
        return updateResult;
    } catch (err) {
        console.log(`Something went wrong` + err);
    }
};

const insertNewTour = async (data) => {
    try {
        const result = await TourModel.create(data);
        return result;
    } catch(err) {
        console.log(err);
        return err;
    }
};

const getTourById = async (id) => {
    try {
        console.log(id);
        const result = await TourModel.find({id: id});
        console.log(result);
        return JSON.stringify(result);
    } catch (err) {
        console.log(err);
    }
};

const getTrendingTour = async () => {
    try {
        const result = await TourModel.findOne().sort({visitCount: -1}).limit(1);
        return result;
    } catch (err) {
        console.log(err);
    }
};

const getCheapestTour = async () => {
    try {
        const result = await TourModel.find({}).sort({price: 1}).limit(1);
        return result;
    } catch (err) {
        console.log(err);
    }
};

module.exports = TourService = {
    getAllTour,
    updateTourById,
    insertNewTour,
    getTourById,
    getCheapestTour,
    getTrendingTour
};