const express = require('express');
const router = express.Router();
const controller = require('../controller/atendimentoController');
const { ehAutenticado } = require('../middlewares/controleUsuario');

router.get('/', ehAutenticado, controller.listar);
router.post('/', ehAutenticado, controller.criar);
router.get('/:id', ehAutenticado, controller.buscarPorId);

router.put('/:id/iniciar', ehAutenticado, controller.iniciar);
router.put('/:id/finalizar', ehAutenticado, controller.finalizar);

module.exports = router;
