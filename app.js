const cors = require('cors');
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const foodController = require('./controllers/foodControllers');
app.use('/foods', foodController);

app.get('/', (req, res) => {
    res.send(`Welcome to Calorie Tracker!`)
});

app.get('*', (req, res) => {
    res.status(404).send("Page not found :(")
});

module.exports = app;