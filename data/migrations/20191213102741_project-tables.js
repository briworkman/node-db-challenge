exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("project_resources", tbl => {
      tbl.primary(["project_id", "resource_id"]);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};
