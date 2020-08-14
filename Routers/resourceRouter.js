const express = require('express');

const ResourceDB = require('../Models/resourceModel.js');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    ResourceDB.getResources()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({error: err.message })
    })
})

module.exports = router;