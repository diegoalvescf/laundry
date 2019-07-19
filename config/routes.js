const express = require("express"); //importar servidor
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const servicoController = require("../app/controllers/os-controller");
const itemController = require("../app/controllers/item-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");
// CLIENTES
routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
routes.post("/clientes", ClienteController.store);
routes.put("/clientes/:id",ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);
// ORDEM DE SERVIÇO
routes.get("/servicos", servicoController.findAll);
routes.get("/servicos/:id", servicoController.findById);
routes.post("/servicos", servicoController.store);
routes.put("/servicos/:id",servicoController.update);
routes.delete("/servicos/:id", servicoController.delete);
// ITENS
routes.get("/itens", itemController.findAll);
routes.get("/itens/:id", itemController.findById);
routes.post("/itens", itemController.store);
routes.put("/itens/:id",itemController.update);
routes.delete("/itens/:id", itemController.delete);
//USUARIO
routes.get("/usuarios", UsuarioController.findAll);
routes.post("/usuarios", UsuarioController.store);
routes.post("/usuarios/validar", UsuarioController.usuarioValido);
routes.put("/usuarios/:id",UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

routes.post("/login", LoginController.fazerLogin);

module.exports = routes;