exports.seed = function(knex) {
  return knex("tasks")
    .del()
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Finish writing seeds",
          notes: "projects, resources, etc.",
          completed: false
        },
        {
          project_id: 1,
          description: "Commit and push to GitHub",
          notes: "",
          completed: false
        },
        {
          project_id: 2,
          description: "Put leash on Milo",
          notes: "",
          completed: false
        },
        {
          project_id: 2,
          description: "Walk",
          notes: "Outside, around the block",
          completed: false
        },
        {
          project_id: 3,
          description: "Open book",
          notes: "",
          completed: false
        },
        {
          project_id: 3,
          description: "Take notes",
          notes: "In your notebook",
          completed: false
        }
      ]);
    });
};
