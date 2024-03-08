const express = require('express');
const router = express.Router();

const DEFAULT_EMAIL = 'email_utilisateur';
const DEFAULT_PASSWORD = 'mot_de_passe_utilisateur';

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {

        if (email !== DEFAULT_EMAIL || password !== DEFAULT_PASSWORD) {
            return res.status(401).send({ error: 'Email ou mot de passe incorrect.' });
        }

        res.status(200).send({ redirectTo: '/menu' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erreur de serveur.' });
    }
});

module.exports = router;



