const { Usuario } = require('../model/modelos');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// POST /api/usuarios/cadastro
exports.cadastrar = async (req, res) => {
    // #swagger.tags = ['Usuarios']
    try {
        const { nome, usuario, senha, perfil } = req.body;

        if (!nome || !usuario || !senha) {
            return res.status(400).json({ errors: [{ msg: "Campos obrigatórios ausentes" }] });
        }

        if (senha.length < 6) {
            return res.status(400).json({ errors: [{ msg: "Senha deve conter pelo menos 6 caracteres" }] });
        }

        const usuarioExistente = await Usuario.findOne({ where: { usuario } });
        if (usuarioExistente) {
            return res.status(400).json({ errors: [{ msg: "Já existe um usuário cadastrado com este identificador" }] });
        }

        const senha_hash = await bcrypt.hash(senha, 10);

        const novoUsuario = await Usuario.create({
            nome,
            usuario,
            senha_hash,
            perfil: perfil || 'recepcao'
        });

        return res.status(201).json({
            id: novoUsuario.id,
            name: novoUsuario.nome,
            usuario: novoUsuario.usuario,
            perfil: novoUsuario.perfil
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao cadastrar usuário" });
    }
};

// POST /api/usuarios/login
exports.login = async (req, res) => {
    // #swagger.tags = ['Usuarios']
    try {
        const { usuario, senha } = req.body;

        if (!usuario || !senha) {
            return res.status(400).json({ errors: [{ msg: "Usuario e senha são obrigatórios" }] });
        }

        const conta = await Usuario.findOne({ where: { usuario } });
        if (!conta) {
            return res.status(401).json({ errors: [{ msg: "Credenciais inválidas" }] });
        }

        const senhaValida = await bcrypt.compare(senha, conta.senha_hash);
        if (!senhaValida) {
            return res.status(401).json({ errors: [{ msg: "Credenciais inválidas" }] });
        }

        const payload = { id: conta.id, perfil: conta.perfil };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'chave_secreta_fallback_vetcare', { expiresIn: '24h' });

        return res.json({
            token,
            usuario: {
                id: conta.id,
                nome: conta.nome,
                usuario: conta.usuario,
                perfil: conta.perfil
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao processar login" });
    }
};
