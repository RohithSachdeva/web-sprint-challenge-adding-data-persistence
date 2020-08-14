exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description');
      tbl.boolean('completed').defaultTo(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 255).notNullable();
      tbl.string('notes', 255);
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 255).unique().notNullable();
      tbl.string('description', 255)
  })
  .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl.integer('resource_id')
      .unsigned()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};



//go top down ... then down up 


// A `task` is one of the steps needed to complete the project. We want to store the following data about an `task`.

// -   [ ] a unique ID.  //increments
// -   [ ] a description of what needs to be done. This column is required.  // notnullable
// -   [ ] a notes column to add additional information. // string 255 
// -   [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

//+ foreign key to projects;    then project resources table with foreign key to project and foreign key to resources?  

// A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

// -   [ ] a unique ID.
// -   [ ] a name. This column is required.
// -   [ ] a description.


