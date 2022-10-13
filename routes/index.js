const router = require('express').Router();
// Import all api routes from api/index.js
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;