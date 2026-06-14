const passport = require('passport');

exports.ehAutenticado = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, usuario, info) => {
        if (err || !usuario) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = usuario;
        return next();
    })(req, res, next);
};

exports.ehAdmin = (req, res, next) => {
    if (req.user && req.user.perfil === 'admin') {
        return next();
    }
    return res.status(403).json({ error: "Acesso negado: apenas Administradores." });
};

exports.ehRecepcao = (req, res, next) => {
    if (req.user && req.user.perfil === 'recepcao') {
        return next();
    }
    return res.status(403).json({ error: "Acesso negado: apenas Recepção." });
};

exports.ehVeterinario = (req, res, next) => {
    if (req.user && req.user.perfil === 'veterinario') {
        return next();
    }
    return res.status(403).json({ error: "Acesso negado: apenas Veterinários." });
};
