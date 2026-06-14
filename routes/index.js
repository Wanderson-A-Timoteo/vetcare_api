var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // #swagger.tags = ['Index']
  res.set('Cache-Control', 'no-store');
  res.json({
    servico: "VetCare API",
    versao: "1.0.0",
    documentacao: "/api-docs"
  });
});

module.exports = router;
