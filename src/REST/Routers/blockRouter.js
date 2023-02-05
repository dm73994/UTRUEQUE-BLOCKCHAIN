const express = require('express');
const { blockRegister } = require('../Controllers/blockController');
const blockRouter = express.Router();


blockRouter.route('/')
    .post(blockRegister)

module.exports = blockRouter;