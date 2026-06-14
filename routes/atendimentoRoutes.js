const express = require('express');
const router = express.Router();
const controller = require('../controller/atendimentoController');
const { ehAutenticado, ehRecepcao, ehVeterinario } = require('../middlewares/controleUsuario');

router.get('/', ehAutenticado, ehRecepcao, controller.listar);
router.post('/', ehAutenticado, ehRecepcao, controller.criar);
router.get('/:id', ehAutenticado, ehRecepcao, controller.buscarPorId);

router.put('/:id/iniciar', ehAutenticado, ehVeterinario, controller.iniciar);
router.put('/:id/finalizar', ehAutenticado, ehVeterinario, controller.finalizar);

module.exports = router;
