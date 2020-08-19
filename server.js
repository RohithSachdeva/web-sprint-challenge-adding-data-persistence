const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./Routers/projectRouter.js');
const resourceRouter = require('./Routers/resourceRouter.js');
const tasksRouter = require('./Routers/taskRouter.js'); 


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.send('API running');
})

module.exports = server;