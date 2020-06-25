const express = require("express");
const router = express.Router();
const {
  seeAllTodos,
  showTodo,
  addTodo,
  deleteTodo,
  editTodo,
} = require("../config/orm");

// route to see all todos
router.get("/api", (req, res) => {
  seeAllTodos()
    .then((allTodos) => res.send(allTodos))
    .catch((err) => res.json(err));
});


// route to see single todo by id
router.get("/api/find/:id", (req, res) => {
  const id = parseInt(req.params.id);
  showTodo(id)
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

// add a todo
router.post("/api", (req, res) => {
  addTodo(req.body.text)
    .then((submitResult) => res.json(submitResult))
    .catch((err) => res.json(err));
});

// delete a todo by its id
router.delete("/api/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  deleteTodo(todoId)
    .then((deleteResponse) => res.send(deleteResponse))
    .catch((err) => res.json(err));
});

// Edit a todo by id. Takes todoCompleted and todoText
router.patch("/api", (req, res) => {
  console.log(req.body);
  editTodo({
    todoText: req.body.todoText,
    todoId: parseInt(req.body.todoId),
    todoCompleted: req.body.todoCompleted === "false" ? false : true,
  })
    .then((editResponse) => res.json(editResponse))
    .catch((err) => res.json(err));
});
module.exports = router;