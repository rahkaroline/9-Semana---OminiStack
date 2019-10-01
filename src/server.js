const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://rayane:rayane@omnistack-shard-00-00-ocotb.mongodb.net:27017,omnistack-shard-00-01-ocotb.mongodb.net:27017,omnistack-shard-00-02-ocotb.mongodb.net:27017/test?ssl=true&replicaSet=Omnistack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params(para filtros)
// req.params = Acessar route params(para edição e delete)
// req.body = Acessar corpo da requisição(para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
