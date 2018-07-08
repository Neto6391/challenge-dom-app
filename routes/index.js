const express = require('express');
const router = express.Router();
const data = require('../public/dados.json');

/**
 * Return Json
*/
router.get('/', (req, res) => {
    res.json(data);
});

module.exports = router;