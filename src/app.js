const express = require('express');  
const container = require("./container");

const app = express();  
 
app.use(express.json());  

app.get('/', (req, res) => {  
    res.send('Hello World!');  
});
//aqui empieza el otro de awilix y sequelize
const userService = container.resolve('userService');

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.json(user);
});

app.get('/users', async (req, res) =>{
    const users = await userService.getUsers();
    res.json(users);
})


// exportamos la instancia de la aplicación para ser utilizada en otros archivos  
module.exports = app; 