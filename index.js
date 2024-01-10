const app = require("./src/app");
const {sequelize} = require("./src/db"); 
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    sequelize.sync({force:true}); //cambiar a false para produccion
    console.log(`listening on port ${PORT}`);
});