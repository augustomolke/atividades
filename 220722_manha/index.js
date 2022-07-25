const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //   res.redirect("/produtos");

  res.send("Hello World!");
});

// app.get("/produtos", (req, res) => {
//   res.send("Hello world!");
// });

app.listen(3001, () => console.log("RODOOOOU!"));
