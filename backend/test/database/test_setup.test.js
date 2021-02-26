const mongoose = require('mongoose');
const models = require('../../app/models/index');

const mongoURI = 'mongodb://localhost:27017/test_database';

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
db = mongoose.connection;
db.on('error', (error) => {
    console.warn('Error : ',error);
});
db.once('open', () => {
    console.log('Connected to mongoDB for database CRUD operations testing');
});


beforeEach(() => {
    const collections = Object.keys(mongoose.connection.collections);
    Object.keys(models).forEach(model => {
        if (!collections.includes(model)) {
            db.createCollection(model)
        }
    });
});
afterEach(() => {
    return Object.keys(models).forEach(model => {
        mongoose.connection.dropCollection(model, () => {
            //this function runs after the drop is completed
        });
    });
});
