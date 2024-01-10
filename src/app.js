const express = require("express");
const morgan = require("morgan");
const cors = require ("cors");
const mainRoute = require ("../routes");
//const bodyParser = require ("body-parser");

const app = express();

//app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(mainRoute); /** aqui cambiamos la ruta **/




    const corsOptions = {
        origin:"*",
        credentials: true,
        optionSuccessStatus: 200,
    };


module.exports = app ;