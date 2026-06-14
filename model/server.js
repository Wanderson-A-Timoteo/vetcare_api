const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    },
    timezone: '-03:00'
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexão com MySQL (Sequelize) estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar no MySQL:', err));

module.exports = sequelize;
