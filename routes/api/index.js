// collect all of the API routes and package them up for us, collects the endpoints and prefixes them 

const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;