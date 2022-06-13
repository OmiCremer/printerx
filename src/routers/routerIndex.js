const express = require('express')

const router = express.Router()

const controllerIndex = require('../controller/controllerIndex')

router.get('/', controllerIndex.index)

module.exports = router