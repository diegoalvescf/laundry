const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; // Define o modelo de dado que vai inserir no movimento

const clienteSchema = newSchema({
    documento: String,
    nome: String,
    telefone: String,
    email: String
},
{
    timestamps: true
}
)

const cliente = mongoose.model("clientes", clienteSchema);

module.exports = cliente; // usado para exportar essas informações - e poder importar no controller