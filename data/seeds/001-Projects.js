
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValue1', description: "Testing!"},
        {id: 2, name: 'rowValue2', description: "I love testing"},
        {id: 3, name: 'rowValue3', description: "cant get enough"}
      ]);
    });
};
