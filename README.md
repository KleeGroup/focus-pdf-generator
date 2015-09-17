Focus génération de PDF
========================

## Objectifs de l'application

- Créer des **PDFs** à partir d'une page de l'application **CAP2ER**.
- Pour celà il faut fournir à l'**API** les éléments nécessaires afin de se connecter à l'application et où le fichier généré doit être enregistré.

## Configuration

Il est possible de régler la configuration de l'application dans le fichier `config.json`. Les paramètres disponibles sont les suivants:
- **domain** : Nom de domaine de l'API, exemple: "localhost"
- **port**: Le port de l'API, exemple: 7777
- **user**: Les identifiants de connexion éventuellement nécessaires.
- **options**: Les options du serveur d'API.

## API
L'API expose deux routes:
- `/capture` **POST** afin de faire la capture d'une page, paramètres : 

```javascript
{
  "url": "http://focus-pdf/diagnostic/1254",
  "filePath": "/c/tmp/KLEE/2015/02/diag1254.pdf"
}

```

## Lancer l'application

- Afin de lancer l'application de génération de PDF il faut lancer la commande: `npm run start`

## Installation

Dans le répertoire courant il faut faire `npm install`
