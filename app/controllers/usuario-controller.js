const usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

class UsuarioController { // esse metodo é apenas para teste, para ver se todos os usuarios estao sendo ok
  async findAll(req, res) {
    const registros = await usuario.find();
    return res.status(200).json(registros);
  }

  async store(req, res) {
    const { senha } = req.body; // essa é a parte de desestruturação, onde pega a senha do body
    req.body.senha = bcrypt.hashSync(senha); // aqui criptografa a senha
    await usuario.create(req.body); 
    return res.status(201).json();
  }

  async usuarioValido(req, res) { // FUNÇÃO PARA VALIDAR SE JÁ EXISTE USUÁRIO CADASTRADO
    const login = req.body.usuario;
    const registro = await usuario.find({ usuario: login }); // AQUI ESTA PASSANDO A CONDIÇÃO DE IGUALDADE SE EXISTE NO BANCO USUARIO E SENHA
    if (registro.length > 0) {
      return res.json(false);
    } else {
      return res.json(true);
    }
  }

  async update(req, res) {
    const { senha } = req.body;
    req.body.senha = bcrypt.hashSync(senha);
    await usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json();
  }

  async delete(req, res) {
    await usuario.findByIdAndDelete(req.params.id);
    return res.send();
  }
}

module.exports = new UsuarioController();