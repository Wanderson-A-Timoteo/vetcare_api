require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const atendimentoRouter = require('./routes/atendimentoRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/atendimentos', atendimentoRouter);

const { sequelize } = require('./model/modelos');
sequelize.sync({ alter: true })
  .then(() => console.log('Banco de dados MySQL e tabelas sincronizadas com sucesso.'))
  .catch(err => console.error('Erro ao sincronizar com o MySQL:', err));

module.exports = app;

module.exports = app;
