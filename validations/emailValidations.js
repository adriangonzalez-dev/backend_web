const {check} = require('express-validator');
const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
const validations = [
    check('name','El nombre es requerido').notEmpty().isString(),
    check('phone', 'El teléfono es requerido').notEmpty(),
    check('email','El email es requerido').notEmpty().isEmail(),
]

module.exports={
    validations
}