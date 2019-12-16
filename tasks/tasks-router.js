const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      let changeValue = tasks.map(task => {
        return {
          ...task,
          completed: task.completed === 0 ? false : true
        };
      });
      res.json(changeValue);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get task" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.addTasks(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
