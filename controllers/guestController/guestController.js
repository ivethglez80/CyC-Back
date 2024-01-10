const axios = require ("axios");
const {Guest} = require("./../../src/db")

const createGuest = async (nombre, apellido, email, telefono, cantidad, asiste) =>
    await Guest.create({nombre, apellido, email, telefono, cantidad, asiste});

const getGuestsList = async () => {
    const dbGuests = await Guest.findAll();
    return [...dbGuests];
}

const updtAsiste = async (id, asiste) => {
    const updated = await Guest.update({asiste},{
        where:{id:id}
    });
    if (updated[0]>0){
        const updtdGst = await Guest.findOne({where:{id:id}});
        return updtdGst;
    }else{
        return null;
    }
    
};


module.exports = {createGuest, getGuestsList, updtAsiste};