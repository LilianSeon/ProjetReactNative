Groupe : Léa & Lilian

## Installation

Installer [ngrok](https://dashboard.ngrok.com/get-started/setup)
lancer ngrok.exe et taper : ngrok http 3001
Prendre l'url Forwarding en https .io
L'url donné par ngrok est aléatoire il faut donc changer l'url de base dans le fichier service/users.service.js ligne 1

```
cd popcorn && npm i && npm start
cd server && npm i && npm start

```

Comme les appelles sur notre API via l'url http://localhost:3001/ ne fonctionnait pas nous avons utilisé ngrok pour faire un tunnel.
L'url donné par ngrok est aléatoire il faut donc changer l'url de base dans le fichier service/users.service.js ligne 1

## Fonctionnalités

- Inscription
- Connexion
- Home page --> tendence d'aujourd'hui, suggestion de films en fonction de la note, suggestion de programme TV en fonction de la note.
- Search page --> Recherche de films + suggestion en fonction de la recherche de l'utilisateur.
- Favorie page --> Liste des films mis en favorie par l'utilisateur.
- Détails de film --> Affiche du film + titre + genres + production + ajout en favorie.