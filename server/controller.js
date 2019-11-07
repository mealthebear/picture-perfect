const {
    getAllClients,
    addClient,
    updateClient,
    deleteClient} = require('../database/dbHelpers.js');

const getAllController = (res, req) => {
    getAllClients()
    .then(() => res.status(200).send('Yay got all clients!'))
    .catch((err) => res.status(400).send('Uh oh! Couldn\'t get all clients!',err))
}

const addController = (res, req) => {
    let { body } = req;
    console.log(req);
    console.log(req.body);
    console.log(body);
    console.log({ body });
    // addClient()
}

const updateController = (res, req) => {

}

const deleteController = (res, req) => {

}

module.exports = {
    getAllController,
    addController,
    updateController,
    deleteController
}