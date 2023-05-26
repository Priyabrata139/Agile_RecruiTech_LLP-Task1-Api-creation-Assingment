const express = require('express');

const v3Routes = require('./v3');

const router = express.Router();


router.use('/v3', v3Routes);

module.exports = router; 