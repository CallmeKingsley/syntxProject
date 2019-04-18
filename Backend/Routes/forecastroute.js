var forecast = require('../Component/forecast');
var express = require('express');
var router  = express.Router();

router.post('/getForecastInfoWithName',forecast.retrievewithCityName);
router.post('/retrievewithZipCode',forecast.retrievewithZipCode);

module.exports = router;