exports.seed = function(knex) {
  return knex("projects")
    .del()
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          name: "Finish Sprint",
          description: "Lambda School node-db-challenge",
          completed: false
        },
        {
          name: "Walk Dog",
          description: "",
          completed: true
        },
        {
          name: "Study",
          description: "Study for final exams",
          completed: false
        }
      ]);
    });
};
