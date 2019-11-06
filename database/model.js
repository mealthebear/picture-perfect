const Sequelize = require('sequelize');
const db = require('./index.js');

const Client = db.define('client', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bill: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.STRING
    }
})

Client.sync();

module.exports = Client;