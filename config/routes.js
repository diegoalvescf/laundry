const express = require("express"); //importar servidor
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const servicoController = require("../app/controllers/os-controller");
const itemController = require("../app/controllers/item-controller");
// METODOS GET
routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
routes.get("/servicos", servicoController.findAll);
routes.get("/servicos/:id", servicoController.findById);
routes.get("/itens", itemController.findAll);
routes.get("/itens/:id", itemController.findById);
// METODO POST
routes.post("/clientes", ClienteController.store);
routes.post("/servicos", servicoController.store);
routes.post("/itens", itemController.store);
// METODO PUT (UPDATE)
routes.put("/clientes/:id",ClienteController.update);
routes.put("/servicos/:id",servicoController.update);
routes.put("/itens/:id",itemController.update);
// METODO DELETE 
routes.delete("/clientes/:id", ClienteController.delete);
routes.delete("/servicos/:id", servicoController.delete);
routes.delete("/itens/:id", itemController.delete);

module.exports = routes;