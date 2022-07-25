const express = require("express");

const routes = express.Router();
let produtos = [
  {
    id: 1,
    name: "Macbook",
    price: 1300,
    quantity: 40,
    colors: ["silver", "black", "white"],
  },
  {
    id: 2,
    name: "Iphone",
    price: 1000,
    quantity: 50,
    colors: ["silver", "red", "white"],
  },
  { id: 3, name: "Pendrive", price: 10, quantity: 10, colors: [] },
  { id: 4, name: "Headset", price: 50, quantity: 0, colors: ["black"] },
  {
    id: 5,
    name: "Mouse",
    price: 20,
    quantity: 5,
    colors: ["white", "black", "blue"],
  },
  {
    id: 6,
    name: "Tablet",
    price: 500,
    quantity: 20,
    colors: ["white", "black"],
  },
  { id: 7, name: "USB adaptor", price: 5, quantity: 0, colors: [] },
  { id: 8, name: "Keyboard", price: 30, quantity: 35, colors: ["white"] },
  {
    id: 9,
    name: "Gamepad",
    price: 30,
    quantity: 25,
    colors: ["black", "silver"],
  },
  { id: 10, name: "Monitor", price: 200, quantity: 3, colors: [] },
];
// - POST

routes.post("/", (req, res) => {
  const body = req.body;

  produtos = [...produtos, ...body];
  res.status(200).json(produtos);
});

// - PUT

routes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  produtos = produtos.map((item) => {
    if (item.id === id) {
      return { ...item, ...body };
    }

    return item;
  });
  res.status(200).json(produtos);
});

// - DELETE

routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  produtos = produtos.filter((item) => item.id !== id);
  res.status(201).json(produtos);
});

// - GET

routes.get("/", (req, res) => {
  res.status(200).json(produtos);
});
module.exports = routes;
