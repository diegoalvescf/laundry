const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
    {
        login: String,
        senha: String,
        email: String
    },
    { timestamps: true }
);

const usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = usuario;