const express = require('express');
const router = express.Router();
const controller = require('../controller/petController');
const { ehAutenticado } = require('../middlewares/controleUsuario');

router.post('/', ehAutenticado, controller.criar);
router.get('/', ehAutenticado, controller.listar);

module.exports = router;
