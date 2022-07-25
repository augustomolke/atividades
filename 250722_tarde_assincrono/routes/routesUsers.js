const express = require("express");

const routes = express.Router();
let users = [
  {
    id: 1,
    username: "username",
    email: "email@email.com",
    password: "12345",
  },
];
// - POST

routes.post("/", (req, res) => {
  const body = req.body;

  users = [...users, ...body];
  res.status(200).json(users);
});

// - PUT

routes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  users = users.map((item) => {
    if (item.id === id) {
      return { ...item, ...body };
    }

    return item;
  });
  res.status(200).json(users);
});

// - DELETE

routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  users = users.filter((item) => item.id !== id);
  res.status(201).json(users);
});

// - GET

routes.get("/", (req, res) => {
  res.status(200).json(users);
});

// PATCH

routes.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  console.log("body", body);

  users = users.map((item) => {
    if (item.id === id) {
      return { ...item, password: body.password };
    }

    return item;
  });
  res.status(200).json(users);
});

module.exports = routes;
