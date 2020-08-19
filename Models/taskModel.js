const db = require('../data/db-config.js');

module.exports = {
    getTasks,
    getTaskById,
    addTask

}

function getTasks() {
    return db('projects')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .select('projects.name as Project-Name', 'projects.description as Project-Description', 'tasks.notes as Task-Notes', 'tasks.description as Task-Description', 'tasks.completed')
}

function getTaskById(id) {
    return db("tasks").where("tasks.id", id).first();
}

function addTask(task) {
    return db('tasks').insert(task).then(id => {
        return getTaskById(id[0]);
    });
}