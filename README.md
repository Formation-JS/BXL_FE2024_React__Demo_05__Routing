# Demo - React router (Declarative)
https://reactrouter.com/start/declarative/installation

## Setup
Création du projet
```
npm create vite@latest
npm i
```

Ajouter le package de routing
```
npm i react-router
```

Ajouter un dossier `Routes` pour les composants du routage

## Mise en place du routing

### Creation des pages de base
```
/routes
  - home.route.jsx
  - contact.route.jsx
```

### Creation du mecanisme de routing
Dans le fichier `/src/app.jsx` définir le routing des pages
```
<routes>
        <Route index element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
</routes>
```

### Activé le mecanisme de router sur l'application
Ajouter la balise `<BrowserRouter> ... </BrowserRouter>` dans le fichier `/src/main.jsx` 

### Ajouter un menu de navigation
Créer un composant avec `<Link to={...} >...</Link>` ou `<NavLink to={...} >...</NavLink>`
```
<ul>
    <li>
        <Link to='/'>Accueil</Link>
    </li>
    <li>
        <Link to='/contact' >Me contacter</Link>
    </li>
</ul>
```

## Type de segment de routing
Segement fixe _(toutes l'url est connu)_
```
<Route path='demo/exemple' element={<ExamplePage />} />
```

Segement dynamique _(Une partie de l'url est dynamique. Exemple : une page detail d'un produit)_
```
<Route path='product/:productId' element={<ProductDetailPage />} />
```