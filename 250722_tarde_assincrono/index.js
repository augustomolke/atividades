const express = require("express");
const usersRoutes = require("./routes/routesUsers");
const app = express();

app.use(express.json());

app.use("/api/users", usersRoutes);

app.use((_req, res, next) => {
  res.status(404).send({ message: "Página não encontrada" });

  next();
});

app.listen(3001, () => console.log("RODOOOOU!"));
