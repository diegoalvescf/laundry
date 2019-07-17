const express = require("express"); // Para subir o servidor

const app = express();

app.use(express.static("./public"));

module.exports = app;