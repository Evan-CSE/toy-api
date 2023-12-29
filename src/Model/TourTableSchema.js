const mongoose = require('mongoose');

const TourSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Id is required"]
    },
    name: {
        type: String,
        required: [true, 'Name must be given']
    },
    description : {
        type: String,
        required: [true, 'Description must be provided']
    },
    price: {
        type: Number,
        require: [true, "Price must be present"],
        min:[1, "Price can not be negative or zero"]
    },
    visitCount: {
        type: Number,
        Default: 0
    }
});

const TourModel = mongoose.model('Tour', TourSchema);

module.exports = TourModel;