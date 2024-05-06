// dbController.js

const db = require('../config/db.js');

// Fonction pour récupérer tous les utilisateurs depuis la base de données
function getAllUsers(callback) {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs : ', err);
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

// Fonction pour insérer un nouvel utilisateur dans la base de données
function insertUser(user, callback) {
    db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de l\'utilisateur : ', err);
            callback(err, null);
            return;
        }
        callback(null, result.insertId);
    });
}

// Exportation des fonctions pour les utiliser dans d'autres parties de l'application
module.exports = {
    getAllUsers,
    insertUser
};
