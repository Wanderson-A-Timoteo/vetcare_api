const express = require('express');
const router = express.Router();
const controller = require('../controller/atendimentoController');

router.get('/', controller.listar);
router.post('/', controller.criar);
router.get('/:id', controller.buscarPorId);

router.put('/:id/iniciar', controller.iniciar);
router.put('/:id/finalizar', controller.finalizar);
module.exports = router;
