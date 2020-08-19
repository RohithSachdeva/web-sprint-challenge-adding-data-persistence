const db = require('../data/db-config.js');

module.exports = {
    getResources,
    getResourcesById,
    addResource

}

function getResources() {
    return db('resources').select('resources.name', 'resources.description')
}

function getResourcesById(id) {
    return db('resources').where('resources.id', id).first();
}

function addResource(resource) {
    return db("resources")
    .insert(resource)
    .then(id => {
        return getResourcesById(id[0]);
    });
}






// function addProject(project) {
//     return db('projects').insert(project).then(id => {
//         return getProjectsById(id[0]);
//     });
// }

// function getProjectsById(id) {
//     return db('projects').where('projects.id', id).first();
// }