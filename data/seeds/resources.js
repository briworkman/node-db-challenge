exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { name: "computer", description: "2015 MacbookPro" },
        { name: "leash", description: "Black nylon leash" },
        { name: "book", description: "Positive Psychology" },
        { name: "note book", description: "College Ruled" }
      ]);
    });
};
