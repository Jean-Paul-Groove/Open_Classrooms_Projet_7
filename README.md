# Mon vieux Grimoire

## Description:

Backend du site de notation de livres en ligne Mon Vieux Grimoire.
Application utilisant Node.js et Express liée à une base de donnée Mongo DB

## Fonctionnalités

Système d'authentification des utilisateurs.
Ajout de livres à la base de donnée par les utilisateurs.
Modification des livres par les utilisateurs les ayant précédemment ajouté.
Suppression des livres par les utilisateurs les ayant précédemment ajouté.
Gestion des notations des livres.

## Comment lancer le projet ?

### Avec npm

Utilisez la commande `npm install` pour installer les dépendances.

Utilisez la commande `npm start` pour lancer le projet.

Utilisez la commande `npm dev` pour lancer le projet en mode développement avec Nodemon.

## Variables d'environnement nécessaires

Un fichier .env contenant des variables d'environnement est nécessaire au fonctionnement du projet. Se référer au fichier .env.dev pour le modèle des variables à définir.

## Librairies utilisées

### Gestion des fichiers pour les couvertures de livres

Validation des fichiers téléchargés par l'utilisateur via **multer**.

Optimization des images (mise à échelle 500x500px et conversion au format webp) avec **sharp**.

### Gestion de l'authentification

Encryptage des mots de passe utilisateur avec **bcrypt**.

Gestion de la connexion via **jsonwebtoken**.

### Variables d'environnment

Configuration des variables d'environnement avec **dotenv**.

### Dépendence de développement

Rechargement du serveur automatiquement après chaque modification avec **nodemon**.
