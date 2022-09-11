const express = require('express');
const Controller = require('../controllers/controller');
const kuliah = require('../controllers/kuliah');

const router = express.Router();

router.get('/', Controller.awal);
router.get('/json', Controller.json);
router.get('/kuliah', kuliah.kuliah);

module.exports = router;
