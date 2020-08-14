const db = require('../data/db-config.js');

module.exports = {
    getResources

}

function getResources() {
    return db('resources')
}