const servico = require("../models/servico");

class servicoController {

    async findAll(req, res) { // RETORNA TODOS OS REGISTROS 
        const registro = await servico.find();
        return res.status(200).json(registro);
    }
    
    async findById(req, res) {
        const registro = await servico.findById(req.params.id) // fazer buscas por id 
        if (registro) {
            return res.status(200).json(registro);
        } else {
            return res.status(404).send("Not Found")
        }
    }

    async store(req, res) {
        const registro = await servico.create(req.body);
        return res.status(201).json(registro);
    }

    async update(req, res) {
        const registro = await servico.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        if(registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not Found");
        }
    }

    async delete(req, res) {
        const registro = await servico.findByIdAndDelete(req.params.id);
        if(registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not Found");
        }
    }

}

module.exports = new servicoController();
