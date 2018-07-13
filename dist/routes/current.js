'use strict';

const express = require('express');
const router = express.Router();

const current = require('../controllers/current');

router.get('/', current);
router.get('/:city', current);

module.exports = router;