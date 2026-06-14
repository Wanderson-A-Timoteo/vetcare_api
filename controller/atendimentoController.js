const { Atendimento, Pet } = require('../model/modelos');

// GET /api/atendimentos
exports.listar = async (req, res) => {
    try {
        res.set('Cache-Control', 'no-cache, public, max-age=15552000');
        
        const lista = await Atendimento.findAll();
        return res.json(lista);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar atendimentos" });
    }
};

// GET /api/atendimentos/:id
exports.buscarPorId = async (req, res) => {
    try {
        res.set('Cache-Control', 'no-cache, private, max-age=86400');
        
        const atendimento = await Atendimento.findByPk(req.params.id, { include: [Pet] });
        if (!atendimento) return res.status(404).json({ error: "Atendimento não encontrado" });
        
        return res.json(atendimento);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar atendimento" });
    }
};
