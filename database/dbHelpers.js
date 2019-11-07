const Client = require('./model.js');

// Get a client
const getClient = () => {
    
}

// Get all clients
const getAllClients = () => {
    return Client.findAll();
}

// Add a client
const addClient = (obj) => {
    return Client.create(obj);
}

// Update a client
const updateClient = (obj, id) => {
    return Client.update(obj, {
        where: {
            firstName: id.firstName,
            lastName: id.lastName
        }
    });
}

// Delete a client
const deleteClient = (obj) => {
    return Client.destroy({
        where: obj
    })
}

module.exports = {
    getAllClients,
    addClient,
    updateClient,
    deleteClient
}