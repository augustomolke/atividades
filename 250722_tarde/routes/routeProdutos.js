const express = require("express");

const routes = express.Router();
let produtos = [];

// - POST para adicionar 4 produtos, de uma vez.

routes.post("/", (req, res) => {
  const body = req.body;

  produtos = [...produtos, ...body];
  res.status(200).json(produtos);
});

// - PUT para modificar um desses produtos.

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

// - DELETE para deletar um desses produtos.

routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  produtos = produtos.filter((item) => item.id !== id);
  res.status(201).json(produtos);
});

// - GET para verificar os que foram mantidos.

routes.get("/", (req, res) => {
  res.status(200).json(produtos);
});
module.exports = routes;
