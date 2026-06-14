const { DataTypes } = require('sequelize');
const sequelize = require('./server');

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perfil: {
    type: DataTypes.ENUM('recepcao', 'admin', 'veterinario'),
    allowNull: false,
    defaultValue: 'recepcao'
  }
});

const Pet = sequelize.define('pet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Atendimento = sequelize.define('atendimento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false
  },
  motivo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('agendado', 'em_atendimento', 'finalizado', 'cancelado'),
    allowNull: false,
    defaultValue: 'agendado'
  }
});


Pet.hasMany(Atendimento, { foreignKey: { name: 'pet_id', allowNull: false }, onDelete: 'CASCADE' });
Atendimento.belongsTo(Pet, { foreignKey: { name: 'pet_id', allowNull: false } });

Usuario.hasMany(Atendimento, { foreignKey: { name: 'usuario_id', allowNull: false }, onDelete: 'CASCADE' });
Atendimento.belongsTo(Usuario, { foreignKey: { name: 'usuario_id', allowNull: false } });

module.exports = { sequelize, Usuario, Pet, Atendimento };
