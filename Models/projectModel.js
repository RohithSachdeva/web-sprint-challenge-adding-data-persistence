const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getProjectsById,
    addProject
}

function getProjects() {
    return db('projects');
}

function getProjectsById(id) {
    return db('projects').where('projects.id', id).first();
}

function addProject(project) {
    return db('projects').insert(project).then(id => {
        return getProjectsById(id[0]);
    });
}





//join statement function to --> RETURN PROJECT RESOURCES; JOIN Resources + id  + projects + id ->


//Wednesday Lecture Example
// // get a list of users
// // CRUD users
// const db = require("../data/db-config.js");

// // above the fold
// module.exports = {
//     getUsers,
//     getUserByID,
//     addUser,
//     updateUser,
//     deleteUser,
// };

// // implementation
// function getUsers() {
//     return db("users");
// }

// function getUserByID(id) {
//     // .first() picks the first element of the returned array
//     // all calls to the database return an array
//     // even if the arrays is empty or has only one element
//     return db("users").where({ id }).first();
// }

// function addUser(user) {
//     return (
//         db("users")
//             .insert(user)
//             .returning("id") // [123]
//             // destructuring the id in place
//             .then(ids => {
//                 const id = ids[0];

//                 return getUserByID(id);
//             })
//     );
// }

// function updateUser(id, changes) {
//     return db("users")
//         .where({ id })
//         .update(changes)
//         .then(() => {
//             return getUserByID(id);
//         });
// }

// function deleteUser(id) {
//     return db("users").where({ id }).del();
// }
