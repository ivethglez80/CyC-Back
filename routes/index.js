const {Router} = require("express");
const mailRoute = require ("./sendEmailRoute");
const attendeeToDb = require ("./attendee");


const mainRouter = Router();

mainRouter.use("/email", mailRoute);
mainRouter.use("/guestsDB", attendeeToDb);


module.exports = mainRouter;