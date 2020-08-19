
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Cooking Pasta', description: "How to cook Pasta"},
        {id: 2, name: 'Build a shed', description: "How to build a shed"},
        {id: 3, name: 'Do it big', description: "How to do it big"}
      ]);
    });
};
