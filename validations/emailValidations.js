const {check} = require('express-validator');

const validations = [
    check('name','El nombre es requerido').notEmpty().isString(),
    check('phone', 'El teléfono es requerido').notEmpty(),
    check('email','El email es requerido').notEmpty().isEmail(),
]

module.exports={
    validations
}