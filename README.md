### Application Web de Location Immobilière - Projet Kasa

Cette application web de location immobilière permet aux utilisateurs de rechercher et de trouver des propriétés immobilières en location. Elle est développée en React en suivant les maquettes Figma fournies et en utilisant les données extraites du fichier JSON fourni.

## Fonctionnalités

Recherche de propriétés immobilières en fonction de différents critères
Affichage des propriétés immobilières sur une carte interactive
Visualisation des détails de chaque propriété immobilière
Gestion de compte utilisateur (connexion, inscription, profil utilisateur)
Ajout de propriétés immobilières par les propriétaires
Contraintes techniques
Les coding guidelines de Kasa sont à respecter pour assurer un code de qualité.

## Contraintes fonctionnelles

La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation et utilisation

Cloner le dépôt GitHub sur votre ordinateur
Installer les dépendances avec la commande `npm install react`
Lancer l'application avec la commande npm `start`
Visualiser l'application avec l'url `http://localhost:3000`

## Technologies utilisées
React
React Router
SASS
Figma (pour les maquettes)
JSON (pour les données)


## Auteur
Ce projet est développé par Minhaj Zubair pour le compte de Kasa.

N'hésitez pas à me signaler des problèmes en ouvrant une issue ou une pull request.