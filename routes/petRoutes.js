const express = require('express');
const router = express.Router();
const controller = require('../controller/petController');
const { ehAutenticado, ehAdmin, ehRecepcao } = require('../middlewares/controleUsuario');

router.post('/', ehAutenticado, ehAdmin, controller.criar);
router.get('/', ehAutenticado, ehRecepcao, controller.listar);

module.exports = router;
