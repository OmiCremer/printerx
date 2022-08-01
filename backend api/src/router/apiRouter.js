const express = require('express');
const router = express.Router();

const apiController = require('../controller/apiController')

router.get('/impresoras', apiController.impresoras)

router.get('/consultas', apiController.consultas1)

router.get('/impresoras/:id', apiController.unaImpresora)

router.post('/consultas/', apiController.consultas)

module.exports = router