var forecast = require('../Component/forecast');
var express = require('express');
var router  = express.Router();

router.post('/getForecastInfoWithName',forecast.retrievewithName);
router.post('/getForecastInfoWithZip',forecast.retrievewithZipCode);

module.exports = router;