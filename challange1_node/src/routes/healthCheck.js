'use strict';
var express = require('express')
var router = express.Router()

const healthCheckHandler = async (request, response) => {
    response.status(200).send('OK');
};

router.get('/healthcheck', healthCheckHandler);
module.exports = router;