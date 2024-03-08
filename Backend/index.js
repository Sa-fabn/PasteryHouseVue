const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./users'); 

const app = express();

mongoose.connect('mongodb://localhost:27017/PasteryHouse')
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));

app.use(express.json());

app.use(userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarre sur le port ${port}`);
});

