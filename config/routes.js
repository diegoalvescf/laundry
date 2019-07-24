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
routes.get("/clientes-pesquisa/", ClienteController.findByNome);
routes.post("/clientes", ClienteController.store);
routes.put("/clientes/:id",ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);
// ORDEM DE SERVIÇO
routes.get("/os", servicoController.findAll);
routes.get("/os/:id", servicoController.findById);
routes.post("/os", servicoController.store);
routes.put("/os/:id",servicoController.update);
routes.delete("/os/:id", servicoController.delete);
// ITENS
routes.get("/itens", ItemController.findAll);
routes.get("/itens/:id", ItemController.findById);
outes.get("/itens-pesquisa", ItemController.findByDescricao);
routes.post("/itens", ItemController.store);
routes.put("/itens/:id", ItemController.update);
routes.delete("/itens/:id", ItemController.delete);
//USUARIO
routes.get("/usuarios", UsuarioController.findAll);
routes.post("/usuarios", UsuarioController.store);
routes.post("/usuarios/validar", UsuarioController.usuarioValido);
routes.put("/usuarios/:id",UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.delete);

routes.post("/login", LoginController.fazerLogin);

module.exports = routes;



