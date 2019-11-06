const Sequelize = require('sequelize');

const db = new Sequelize('photo_clients', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

db
.authenticate()
.then(() => {
    console.log('Yay connected to database successfully!');
})
.catch((err) => {
    console.log('Uh oh can\'t connect to database:', err);
});

module.exports = db;

