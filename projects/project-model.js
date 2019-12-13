const db = require("../data/db-config");

module.exports = {
  getById,
  getProjects,
  addProjects,
  getResources,
  getTasks
};

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getProjects() {
  return db("projects");
}

function addProjects(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      const [id] = ids;
      return getById(id);
    });
}

function getResources(project_id) {
  return db("project_resources as pr")
    .select("resources.name")
    .where({ project_id })
    .join("resources", "resources.id", "pr.resource_id");
}

function getTasks(project_id) {
  return db("tasks as t")
    .select("t.id", "t.description")
    .where({ project_id })
    .join("projects", "projects.id", "t.project_id");
}
