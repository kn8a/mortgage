var express = require('express');
var router = express.Router();
const { getAppData } = require('../controllers/appDataController')

// */api/appdata/rates
router.get('/rates', getAppData)

module.exports = router;