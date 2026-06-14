const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Usuario } = require('../model/modelos');

const opcoes = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'chave_secreta_fallback_vetcare'
};

passport.use(new JwtStrategy(opcoes, async (jwt_payload, done) => {
    try {
        const usuario = await Usuario.findByPk(jwt_payload.id);
        
        if (usuario) {
            return done(null, usuario);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
}));

module.exports = passport;
