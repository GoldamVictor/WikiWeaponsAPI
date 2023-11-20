const express = require("express");
const cors = require("cors");
const app = express();

const usuarios = [
  { email: "xx@gmail.com", password: "123" },
  { email: "zzz@hotmail.com", password: "user2" },
  { email: "asdf@outlook.com", password: "user3" },
];

app.use(express.json());
app.use(cors());

app.get("/", ({}, res) => {
  return res.send("Server is now working");
});

app.post("/auth", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const usuarioAutenticado = usuarios.find(
    (u) => u.email === email && u.password === password,
  );

  if (usuarioAutenticado) {
    return res
      .status(300)
      .send({ email: usuarioAutenticado.email, isValid: true });
  }
  return res.status(401).send("Credenciales Invalidas");
});

app.listen(3000, () => {
  console.log("Server is now listening on port 3000");
});
