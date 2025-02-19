const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' //aqui se supone que queda la bd
});

module.exports ={sequelize};