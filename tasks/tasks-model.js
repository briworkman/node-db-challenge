const db = require("../data/db-config");

module.exports = {
  getById,
  getTasks,
  addTasks
};

function getById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function getTasks() {
  return db("tasks");
}

function addTasks(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      const [id] = ids;
      return getById(id);
    });
}
