const db = require("../data/db-config");

module.exports = {
  getById,
  getResources,
  addResources
};

function getById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function getResources() {
  return db("resources");
}

function addResources(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      const [id] = ids;
      return getById(id);
    });
}
