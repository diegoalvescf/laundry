const item = require("../models/item");

class ItemController {

    async findAll(req, res) { // RETORNA TODOS OS REGISTROS 
        const registro = await item.find();
        return res.status(200).json(registro);
    }
    
    async findById(req, res) {
        const registro = await item.findById(req.params.id) // fazer buscas por id 
        if (registro) {
            return res.status(200).json(registro);
        } else {
            return res.status(404).send("Not Found")
        }
    }

    async findByDescricao(req, res) {
        var regex = new RegExp("" + req.query.pesquisa + ".*$", "i");
        const registros = await item.find({ descricao: regex });
        return res.json(registros);
    }

    async store(req, res) {
        const registro = await item.create(req.body);
        return res.status(201).json(registro);
    }

    async update(req, res) {
        const registro = await item.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        if(registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not Found");
        }
    }

    async delete(req, res) {
        const registro = await item.findByIdAndDelete(req.params.id);
        if(registro) {
            return res.status(200).send("Deleted");
        } else {
            return res.status(404).send("Not Found");
        }
    }

}

module.exports = new ItemController();
