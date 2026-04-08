# Atlas Vert 🌿 — Website

Tourisme Nature & Montagne — Maroc

## Structure du projet

```
atlas-vert/
├── index.html          ← Page d'accueil
├── css/
│   └── style.css       ← Tout le CSS
├── js/
│   └── main.js         ← JS + traductions FR/EN/AR
├── pages/
│   ├── booking.html    ← Page de réservation
│   ├── rafting.html    ← Page Rafting (à créer)
│   ├── camping.html    ← Page Camping (à créer)
│   └── contact.html    ← Page Contact (à créer)
└── images/             ← Mettez vos photos ici
    ├── hero.jpg
    ├── rafting.jpg
    ├── camping.jpg
    └── logo.png
```

---

## 🚀 Déployer sur GitHub Pages (GRATUIT)

### Étape 1 — Créer un compte GitHub
Allez sur https://github.com → Sign up (gratuit)

### Étape 2 — Créer un nouveau repository
1. Cliquez sur **New repository**
2. Nom : `atlas-vert` (ou votre domaine)
3. Cochez **Public**
4. Cliquez **Create repository**

### Étape 3 — Uploader les fichiers
1. Cliquez **Upload files**
2. Glissez-déposez TOUS les fichiers du dossier `atlas-vert/`
3. Cliquez **Commit changes**

### Étape 4 — Activer GitHub Pages
1. Allez dans **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** / **root**
4. Cliquez **Save**

✅ Votre site sera disponible sur :
`https://VOTRE-USERNAME.github.io/atlas-vert/`

---

## 🌐 Connecter votre domaine (atlas-vert.com)

### Acheter le domaine
- **Namecheap** : https://www.namecheap.com (~$10/an)
- **GoDaddy** : https://www.godaddy.com

### Configurer le DNS
Dans votre registrar, ajoutez ces enregistrements DNS :

| Type  | Nom  | Valeur               |
|-------|------|----------------------|
| A     | @    | 185.199.108.153      |
| A     | @    | 185.199.109.153      |
| A     | @    | 185.199.110.153      |
| A     | @    | 185.199.111.153      |
| CNAME | www  | VOTRE-USERNAME.github.io |

### Dans GitHub Pages
- Dans **Settings → Pages → Custom domain**
- Entrez : `atlas-vert.com`
- Cochez **Enforce HTTPS**

---

## 📸 Ajouter vos photos

Remplacez les emojis par vos vraies photos :

1. Mettez vos images dans le dossier `images/`
2. Dans `main.js`, ligne avec `act-img-placeholder`, remplacez par :
```html
<img src="../images/rafting.jpg" alt="Rafting Atlas">
```

---

## 📱 Réseaux sociaux — Mettre à jour les liens

Dans `index.html`, trouvez la section `social-strip` et remplacez les liens :

```html
<a href="https://www.facebook.com/VOTRE-PAGE" ...>
<a href="https://www.instagram.com/VOTRE-COMPTE" ...>
<a href="https://wa.me/212XXXXXXXXX" ...>
```

---

## ✏️ Modifier le contenu

Tout le texte FR/EN/AR est dans **`js/main.js`** dans l'objet `TRANSLATIONS`.

Cherchez le texte à modifier et changez-le directement.

---

## 📞 Numéro WhatsApp

Dans `js/main.js`, ligne :
```js
const WA_NUMBER = '212667772551';
```
Remplacez par votre numéro (sans + et sans espaces).
