const express = require('express');



const appRoutes = require('./app');
const router = express.Router();




router.use('/app', appRoutes);



module.exports = router;