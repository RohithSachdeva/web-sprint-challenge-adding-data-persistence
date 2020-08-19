const express = require('express');

const ProjectDB = require('../Models/projectModel.js');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    ProjectDB.getProjects()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    ProjectDB.getProjectsById(id)
    .then(data => {
        if(id) {
            res.status(200).json(data);
        } else {
            res.status(404).json({error: "project not found"})
        }
    })
    .catch(error => {
        res.status(500).json({error: err.message})
    })
})

router.post("/", (req, res) => {
    ProjectDB.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;