const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env._HOST,
    port: process.env._PORT,
    secure: false, //true for 465, false por other ports like 587
    auth:{
        user: process.env._MAIL,
        pass: process.env._PASSWORD,    
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const {nombre, apellido, email, telefono, cantPers} = req.body;
    console.log(nombre, apellido, email, telefono, cantPers);

// PARA ENVIAR DESDE EL WEBSITE A OTROS
  // var mailOptions = {
  //   from: process.env._MAIL,
  //   to: email,
  //   consulta: consulta,
  //   nombre: nombre,
  //   apellido: apellido
  // };

  // PARA QUE LOS VISITORS ENVIEN CONSULTAS

var mailOptions = {
    from: email, 
    to: process.env._MAIL,
    subject: 'consulta desde el sitio web',
    text: `
        nombre: ${nombre}
        apellido: ${apellido}
        email: ${email}
        telefono: ${telefono}
        cantPers: ${cantPers}
    `
};

transporter.sendMail(mailOptions, function (error, info){
    if(error){
        console.log(error);
    }else{
        console.log("email sent succesfully");
        res.status(200).send("correo enviado con exito");
    }
});
});

module.exports = {sendEmail};