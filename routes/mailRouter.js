const { Router } = require('express');
const router = Router();

//controller
const { sendMail } = require('../controller/mailController');

//validations
const {validations} = require('../validations/emailValidations');

//middlewares
const { getErrors } = require('../middlewares');


router.post('/mail', validations, getErrors, sendMail);

module.exports = router