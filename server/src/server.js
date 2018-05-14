'use strict';

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1';
const MONGO_DB = process.env.MONGO_DB || 'database';
const MONGO_URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`MongoDB connected to ${MONGO_URI}`);

        const server = express();

        server.use(express.static(__dirname + '/public'));
        server.use(require('./controller'));

        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err.stack);
        process.exit(1);
    });