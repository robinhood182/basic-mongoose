const mongoose = require('mongoose');

module.exports = function(dbUri) {

    mongoose.connect(dbUri, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection to ', dbUri);
    });

    mongoose.connection.on('error', (err) => {
        console.log('Mongoose default connectio error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose default connection through app termination');
            process.exit(0);
        });
    });
};