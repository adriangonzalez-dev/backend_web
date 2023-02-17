const { request, response } = require("express");
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = {
    async sendMail(req=request, res=response){
        const {name, phone, email, pyme, message} = req.body;
        try {
            await transport.sendMail({
                from: `${name} <${email}>`,
                to: email,
                subject: `${pyme}`,
                text: 'Estoy interesado!',
                html: `
                        <h1>Hola Adrián</h1>
                        <p>${message}</p>
                        <p>My phone: ${phone}</p>`,
              });
              return res.status(200).json({
                message: 'ok',
              })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                ok: 'false',
                error
              })
        }
    }
}