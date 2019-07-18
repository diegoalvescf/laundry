const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; // Define o modelo de dado que vai inserir no movimento

const itemSchema = newSchema({
    descricao: String,
    valor: Number
},
{
    timestamps: true // Regustra os eventos, quando foi criado e quando foi alterado
}
)

const item = mongoose.model("itens", itemSchema);

module.exports = item;