const express = require("express");
const productsRoutes = require("./routes/routeProdutos");
const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);

app.use((_req, res, next) => {
  res.status(404).send({ message: "Página não encontrada" });

  next();
});

app.listen(3001, () => console.log("RODOOOOU!"));
