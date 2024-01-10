const {createGuest, getGuestsList, updtAsiste} = require ("../controllers/guestController/guestController")

const createGuestHandler =  async (req, res) => {
    const {nombre, apellido, email, telefono, cantidad, asiste} = req.body;
    try {
        const newGuest = await createGuest(nombre, apellido, email, telefono, cantidad, asiste);
        res.status(201).json(newGuest);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getGuestsListHandler = async (req, res) => {
    
    try {
        const results = await getGuestsList();
        res.status(200).json(results);    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const updtAsisteHandler = async (req,res) => {
    const {id, asiste} = req.body;
    try {
        const guestUpdtd = await updtAsiste(id, asiste);
        if (guestUpdtd){
            res.status(200).json(guestUpdtd)
        }else{
            res.status(404).json({error:"Guest not found"});
        }        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    createGuestHandler,
    getGuestsListHandler,
    updtAsisteHandler
};