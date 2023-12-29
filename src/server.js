const APP      = require('./app');
const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect('mongodb+srv://crypto-admin:s5cURkB5fFmGxzuX@cluster0.xgoot.mongodb.net/?retryWrites=true&w=majority&ssl=true', {
            serverSelectionTimeoutMS: 3000
        })
        .then(() => console.log('Connected to mongodb'));

        APP.listen(8080, () => {
            console.log(`Listening on port: 8080`);
        })
    } catch (err) {
        console.log(`Encountered error: ${err}`);
    }
}

main();