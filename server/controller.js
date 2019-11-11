const {
    getAllClients,
    addClient,
    updateClient,
    deleteClient} = require('../database/dbHelpers.js');

const getAllController = (req, res) => {
    getAllClients()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send('Uh oh! Couldn\'t get all clients!',err))
}

const addController = (req, res) => {
    let { body } = req;
    addClient(body)
    .then(() => res.status(201).send('Post successful!'))
    .catch((err) => res.status(401).send('Couldn\'t post!', err));
}

const updateController = (req, res) => {
    updateClient(req.body)
    .then(() => res.status(202).send('Updated description!'))
    .catch((err) => res.status(402).send('Couldn\'t update!', err))
}

const deleteController = (req, res) => {

}

module.exports = {
    getAllController,
    addController,
    updateController,
    deleteController
}