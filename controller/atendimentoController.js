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

// POST /api/atendimentos
exports.criar = async (req, res) => {
    try {
        const { data_hora, motivo, pet_id, usuario_id } = req.body;

        if (!data_hora || !motivo || !pet_id || !usuario_id) {
            return res.status(400).json({ error: "Campos 'data_hora', 'motivo', 'pet_id' and 'usuario_id' são obrigatórios" });
        }

        const novoAtendimento = await Atendimento.create({ data_hora, motivo, pet_id, usuario_id });
        return res.status(201).json(novoAtendimento);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao criar atendimento" });
    }
};

// PUT /api/atendimentos/:id/iniciar
exports.iniciar = async (req, res) => {
    try {
        const atendimento = await Atendimento.findByPk(req.params.id);
        if (!atendimento) {
            return res.status(404).json({ error: "Atendimento não encontrado" });
        }

        if (atendimento.status === 'em_atendimento') {
            return res.status(400).json({ error: "Atendimento já está com este status" });
        }

        await atendimento.update({ status: 'em_atendimento' });
        return res.json(atendimento);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao iniciar atendimento" });
    }
};

// PUT /api/atendimentos/:id/finalizar
exports.finalizar = async (req, res) => {
    try {
        const atendimento = await Atendimento.findByPk(req.params.id);
        if (!atendimento) {
            return res.status(404).json({ error: "Atendimento não encontrado" });
        }

        if (atendimento.status === 'finalizado') {
            return res.status(400).json({ error: "Atendimento já está com este status" });
        }

        await atendimento.update({ status: 'finalizado' });
        return res.json(atendimento);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao finalizar atendimento" });
    }
};
