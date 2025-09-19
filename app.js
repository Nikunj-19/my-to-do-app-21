const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory tasks
let tasks = [];

// Routes
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/add", (req, res) => {
  const task = req.body.task.trim();
  if (task) {
    tasks.push(task);
  }
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.redirect("/");
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
