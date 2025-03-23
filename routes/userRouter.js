const { users } = require("../db");
const express = require("express");
const userRouter = express.Router();

// Middleware to check if the user exists
userRouter.param("id", (req, res, next, id) => {
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).send("User with the given ID was not found");
  }
  req.user = user;
  next();
});
// GET all users
userRouter.get("/", (req, res) => {
  res.send(users);
});
// GET user by ID
userRouter.get("/:id", (req, res) => {
  res.send(req.user);
});
// POST new user
userRouter.post("/", (req, res) => {
  // Check if all fields are provided and are valid
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send("All fields are required");
  }
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(newUser);
  res.sendStatus(201);
});
// PUT user by ID
userRouter.put("/:id", (req, res) => {
    const user = req.user;
    // Update the user object with the new data 
    Object.keys(req.body).forEach((key) => {
        if (user.hasOwnProperty(key)) {
        user[key] = req.body[key];
        }
    });
    res.send(user);
    });
  
// DELETE user by ID
userRouter.delete("/:id", (req, res) => {
    const index = users.indexOf(req.user);
    users.splice(index, 1);
    res.json({ message: "User deleted" });
    }
    );
module.exports = userRouter;
