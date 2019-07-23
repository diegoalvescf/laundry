const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; // Define o modelo de dado que vai inserir no movimento

const servicoSchema = new Schema({
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    cliente: {
        type: Schema.Types.ObjectId, // busca o ID
        ref: "cliente" // model servico
    },

    itens: [
        {
            type: Schema.Types.ObjectId,
            ref: "item" // nome da const declarada dentro do item http://prntscr.com/oio3zk
        }
    ]
},{timestamps: true}
)

const servico = mongoose.model("servicos", servicoSchema);

module.exports = servico;