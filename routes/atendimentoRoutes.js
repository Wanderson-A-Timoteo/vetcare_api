const express = require('express');
const router = express.Router();
const controller = require('../controller/atendimentoController');

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);

module.exports = router;
