import express from "express";
import sequelize from "./src/db/conn";

const PORT = 3300;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`Erro ao conectar: ${error}`));
