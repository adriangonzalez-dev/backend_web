const { request, response } = require("express");
const { validationResult } = require("express-validator");

module.exports = {
    getErrors(req=request, res=response, next){
        const errors = validationResult(req);
        if(errors.isEmpty()){
            next()
        }
        return res.status(400).json({
            ok: 'false',
            errors: errors.mapped()
        })
    }
}