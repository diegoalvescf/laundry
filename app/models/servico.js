const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; // Define o modelo de dado que vai inserir no movimento

const servicoSchema = newSchema({
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    servico: {
        type: Schema.Types.ObjectId, // busca o ID
        ref: "servico" // model servico
    },

    itens: [
        {
            type: Schema.Types.ObjectId,
            ref: "item"
        }
    ]
},{timestamps: true}
)

const servico = mongoose.model("servicos", servicoSchema);

module.exports = servico;