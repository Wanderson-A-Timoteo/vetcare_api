const express = require('express');
const router = express.Router();
const controller = require('../controller/usuarioController');

router.post('/cadastro', controller.cadastrar);
router.post('/login', controller.login);

module.exports = router;
