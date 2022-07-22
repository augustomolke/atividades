const express = require("express");

const app = express();

let produtos = [];

app.use(express.json());

// - POST para adicionar 4 produtos, de uma vez.

app.post("/", (req, res) => {
  const body = req.body;

  produtos = [...produtos, ...body];
  res.status(200).json(produtos);
});

// - PUT para modificar um desses produtos.

app.put("/:id", (req, res) => {
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

app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  produtos = produtos.filter((item) => item.id !== id);
  res.status(201).json(produtos);
});

// - GET para verificar os que foram mantidos.

app.get("/", (req, res) => {
  res.status(200).json(produtos);
});

app.listen(3001, () => console.log("RODOOOOU!"));
