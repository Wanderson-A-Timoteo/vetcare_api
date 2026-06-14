const { Pet } = require('../model/modelos');
const { Op } = require('sequelize');

// POST /api/pets
exports.criar = async (req, res) => {
    // #swagger.tags = ['Pets']
    try {
        const { nome, especie } = req.body;

        if (!nome || !especie) {
            return res.status(400).json({ error: "Campos 'nome' and 'especie' são obrigatórios" });
        }

        const novoPet = await Pet.create({ nome, especie });
        return res.status(201).json(novoPet);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao criar pet" });
    }
};

// GET /api/pets
exports.listar = async (req, res) => {
    // #swagger.tags = ['Pets']
    try {
        res.set('Cache-Control', 'no-cache, public, max-age=15552000');

        let filtro = {};
        
        if (req.query.especie) {
            filtro.especie = req.query.especie;
        }

        const lista = await Pet.findAll({ where: filtro });
        return res.json(lista);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao listar pets" });
    }
};
