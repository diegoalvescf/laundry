const express = require("express"); // Para subir o servidor
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

module.exports = app;