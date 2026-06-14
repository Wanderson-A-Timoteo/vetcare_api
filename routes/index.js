var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // #swagger.tags = ['Index']
  res.set('Cache-Control', 'no-store');
  res.json({
    "nome": "API VetCare",
    "descricao": "API RESTful para gerenciamento de atendimentos veterinários",
    "versao": "1.0",
    "tecnologias": [
      "Node.js",
      "Express",
      "Sequelize",
      "JWT",
      "Swagger"
    ],
    "status": "online",
    "timestamp": new Date().toLocaleString('pt-BR'),
    "documentacao": "http://localhost:3000/api-docs"
  });
});

module.exports = router;
