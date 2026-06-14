require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport = require('./config/passport');

var indexRouter = require('./routes/index');
const atendimentoRouter = require('./routes/atendimentoRoutes');
const petRouter = require('./routes/petRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api/atendimentos', atendimentoRouter);
app.use('/api/pets', petRouter);
app.use('/api/usuarios', usuarioRouter);

const { sequelize } = require('./model/modelos');
sequelize.sync({ alter: true })
  .then(() => console.log('Banco de dados MySQL e tabelas sincronizadas com sucesso.'))
  .catch(err => console.error('Erro ao sincronizar com o MySQL:', err));

module.exports = app;
