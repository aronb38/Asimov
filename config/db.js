// db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'votre_utilisateur_mysql',
    password: 'votre_mot_de_passe_mysql',
    database: 'nom_de_votre_base_de_données'
});

// Vérification de la connexion
connection.connect(function(err) {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données : ', err);
        return;
    }
    console.log('Connecté à la base de données MySQL !');
});

module.exports = connection;
