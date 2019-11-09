const {
    getAllClients,
    addClient,
    updateClient,
    deleteClient} = require('../database/dbHelpers.js');

const getAllController = (req, res) => {
    getAllClients()
    .then(() => res.status(200).send('Yay got all clients!'))
    .catch((err) => res.status(400).send('Uh oh! Couldn\'t get all clients!',err))
}

const addController = (req, res) => {
    let { body } = req;
    let tempVar = req.body;
    console.log(req);
    console.log(req['body']);
    console.log(body);
    console.log({ body });
    console.log(tempVar);
    // addClient()
}

const updateController = (req, res) => {

}

const deleteController = (req, res) => {

}

module.exports = {
    getAllController,
    addController,
    updateController,
    deleteController
}