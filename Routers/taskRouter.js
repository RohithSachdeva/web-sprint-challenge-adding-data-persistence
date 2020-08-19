const express = require('express');

const TaskDB = require('../Models/taskModel.js');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    TaskDB.getTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({error: err.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    TaskDB.getTaskById(id)
    .then(data => {
        if(id) {
            res.status(200).json(data);
        } else {
            res.status(404).json({error: "task not found"})
        }
    })
    .catch(error => {
        res.status(500).json({error: err.message})
    })
})

router.post("/", (req, res) => {
    TaskDB.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})


module.exports = router;