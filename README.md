# Flip 7 – Scores

Application web pour compter les scores du jeu de cartes **Flip 7**, en version classique et en version **Vengeance**. Elle tient dans **un seul fichier HTML** (HTML + CSS + JavaScript, sans dépendance ni étape de build) et est pensée pour être utilisée sur smartphone, mais elle fonctionne aussi sur PC.

> Application non officielle, créée par un fan. Flip 7 est un jeu d'Eric Olsen (Flip 7 Vengeance : Eric Olsen et Alyssa Swatek), © USAopoly. Ce dépôt n'est pas affilié aux éditeurs du jeu.

## Utilisation

Ouvrez `index.html` dans un navigateur récent (PC ou smartphone). Il n'y a rien à installer.
Ou directement depuis ce dépôt : [https://xiigle.github.io/flip7_scoring/](https://xiigle.github.io/flip7_scoring/)

## Fonctionnalités

- **Deux versions du jeu**, au choix au démarrage : Classique ou Vengeance.
- **Mode sans pitié** (Vengeance) : active les scores de manche négatifs.
- **Joueurs mémorisés** : les noms saisis sont enregistrés. Au démarrage, une liste permet de les sélectionner rapidement. Un joueur sélectionné disparaît de la liste, et un nom enregistré peut être supprimé (avec confirmation).
- **Score cible configurable** (200 par défaut).
- **Tableau des scores** trié du plus grand au plus faible, avec barres de progression, couronne pour le leader et indicateur du donneur. La saisie des manches garde l'ordre de départ.
- **Saisie d'une manche** : sur écran tactile, pavé de type calculatrice (limité à 3 chiffres) ; sur PC, champ de saisie classique. Un bouton ± apparaît quand les scores négatifs sont autorisés.
- **Alerte de score trop élevé** : un message prévient si un score dépasse le maximum théorique, avec la possibilité de valider quand même.
- **Aide au comptage** (bouton 🧮) : on touche les cartes que le joueur possède et le score de la manche est calculé selon les règles de la version choisie.
- **Historique des manches** avec modification et suppression.
- **Fin de partie** : annonce du vainqueur dès que le score cible est atteint, ou de l'égalité (dans ce cas, une manche supplémentaire est nécessaire). On peut aussi continuer à jouer.
- **Multilingue** : français, anglais, espagnol, allemand (détection automatique de la langue du navigateur, changement via les boutons en haut de page).
- **Interface adaptée au mobile** : popups intégrés à l'application (pas de `select` ni de `prompt` natifs), sélection de texte et menus système désactivés, défilement de fond bloqué quand un popup est ouvert.

## Règles de calcul de l'aide au comptage

**Classique**
1. Somme des cartes Numéro (0 à 12).
2. ×2 si la carte Bonus ×2 est présente (elle ne double que les Numéros).
3. Ajout des Bonus (+2, +4, +6, +8, +10).
4. +15 si 7 cartes Numéro différentes (Flip 7).

**Vengeance**
1. Somme des cartes Numéro (0 à 13, dont le 7 Porte-malheur et le 13 Porte-bonheur).
2. ÷2 (arrondi à l'inférieur) si la carte ÷2 est présente.
3. Soustraction des Malus (−2 à −10). Le score de manche ne peut pas être négatif, sauf en mode sans pitié.
4. +15 si 7 cartes Numéro (Flip 7). Le Zéro donne 0 point sauf en cas de Flip 7.

Les cartes Action (Échange, Vol, Défausse…) n'ont pas de valeur en points : il suffit de sélectionner les cartes que le joueur possède réellement à la fin de la manche. En mode sans pitié, un Flip 7 permet de faire perdre les 15 points à un adversaire : saisissez alors −15 sur son score.

## Données et hors ligne

- Les données (joueurs enregistrés, partie en cours, langue, réglages) sont stockées dans le `localStorage` du navigateur, sous la clé `f7`. Rien n'est envoyé sur un serveur.
- Pour tout réinitialiser, videz les données du site dans les réglages du navigateur.
- La police **Barlow Condensed** est chargée depuis Google Fonts : sans connexion lors de la première visite, l'application reste utilisable avec la police système par défaut. Pour un usage totalement hors ligne, téléchargez la police et remplacez le `<link>` Google Fonts par des déclarations `@font-face` locales.

## Personnalisation

Les textes se trouvent dans l'objet `T` au début du script : pour ajouter une langue, copiez un bloc existant (`fr`, `en`, `es`, `de`) et traduisez les valeurs. Les couleurs du thème sont définies dans les variables CSS de `:root`.
