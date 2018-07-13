'use strict';

const express = require('express');
const router = express.Router();

router.get('/current', async (req, res) => {
    res.send('current');
});

module.exports = router;