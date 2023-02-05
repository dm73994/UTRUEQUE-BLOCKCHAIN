const express = require('express')

const app = express()

app.use(express.json());

// ROUTER
const blockRouter = require('./src/REST/Routers/blockRouter');
app.use('/block/', blockRouter);

module.exports = app;