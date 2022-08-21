const express = require("express");
const routes = require("./routes");
const db = require('./database');
const porta = 4000;

const app = express();

//checagem se db esta conectado
db.hasConnection();

app.use(express.json());
app.use(routes);

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));