// Dans votre contrôleur, par exemple mainController.js

const dbController = require('../controllers/dbController.js');

// Exemple d'utilisation de la fonction pour récupérer tous les utilisateurs
dbController.getAllUsers((err, users) => {
    if (err) {
        console.error('Erreur lors de la récupération des utilisateurs : ', err);
        // Gérer l'erreur
        return;
    }
    console.log('Utilisateurs récupérés : ', users);
    // Continuer avec les utilisateurs récupérés
});
