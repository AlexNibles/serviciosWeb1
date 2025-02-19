const { createContainer, asClass, asValue } = require('awilix');
const UserService = require('./services/userService');
const User = require('./models/user');

const container = createContainer();

container.register({
    userModel: asValue(User), // Registramos User como userModel
    userService: asClass(UserService).singleton()
});

module.exports = container;