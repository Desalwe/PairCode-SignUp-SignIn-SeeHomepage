const express = require('express');
const router = express.Router();
const { showHomepage } = require('../controllers/pages-controller');

/* GET home page. */
router.get('/', showHomepage)

module.exports = router;
