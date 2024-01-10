const {Router} = require ("express");

const {createGuestHandler, getGuestsListHandler, updtAsisteHandler} = require("../handlers/guestHandlers");

const guestRouter = Router();

const validate = (req,res, next) => {
    const {nombre} = req.body;
    console.log(nombre);
    if(!nombre) 
        return res.status(400).json({error:"falta ingresar nombre"})
    next();
}

guestRouter.post("/", validate, createGuestHandler);
guestRouter.get("/", getGuestsListHandler);
guestRouter.put("/", updtAsisteHandler);

module.exports = guestRouter;