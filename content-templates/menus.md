# Structure des Menus Recommandée

## Menu Principal (`main-menu`)

Utilisé dans le header du site.

```
Accueil              /
Services             #services (ou /pages/services)
  ├─ Développement      /pages/services#development
  ├─ Design             /pages/services#design
  ├─ Optimisation       /pages/services#optimization
  └─ Support            /pages/services#support
Portfolio            /pages/portfolio
À Propos             /pages/about
Blog                 /blogs/news (optionnel)
Contact              /pages/contact
```

### Comment Créer ce Menu

1. Allez dans **Navigation**
2. Cliquez sur **Menu principal** (ou créez-le)
3. Ajoutez les liens dans cet ordre
4. Pour les sous-menus, glissez un lien légèrement vers la droite
5. Sauvegardez

---

## Menu Footer (`footer`)

Utilisé dans le footer, colonne 2.

```
À Propos              /pages/about
Services             /pages/services
Portfolio            /pages/portfolio
Blog                 /blogs/news
Contact              /pages/contact
Mentions Légales    /pages/legal
Confidentialité      /pages/privacy
CGV                  /pages/terms
```

### Comment Créer ce Menu

1. Allez dans **Navigation**
2. Cliquez sur **Ajouter un menu**
3. Nom du menu : `footer`
4. Handle : `footer`
5. Ajoutez tous les liens
6. Sauvegardez

---

## Menu Mobile (Automatique)

Le menu mobile utilise automatiquement le `main-menu`.

Il affiche :
- Tous les liens du menu principal
- Le bouton CTA (Contact)
- Icône hamburger pour ouvrir/fermer

---

## Menu Services (Optionnel)

Si vous voulez un menu dédié aux services dans une section spécifique :

```
Développement Thèmes    /pages/services#development
Design UI/UX            /pages/services#design
Optimisation            /pages/services#optimization
Intégrations            /pages/services#integrations
Support                 /pages/services#support
```

---

## Ancres (Anchors) pour Navigation Smooth

Pour créer des liens vers des sections de la page d'accueil :

### Dans le Menu
```
Services    #services
Portfolio   #portfolio
```

### Dans vos Sections
Assurez-vous que vos sections ont les bons IDs :
- Section Services : `id="services"`
- Section Portfolio : `id="portfolio"`

Le thème gère automatiquement le smooth scroll !

---

## Menu Mega (Futur)

Pour un menu avec colonnes multiples (version avancée) :

```
Services
  Colonne 1: Développement
    ├─ Thèmes Custom
    ├─ Apps Shopify
    └─ Migrations
  
  Colonne 2: Design
    ├─ UI/UX Design
    ├─ Branding
    └─ Responsive
  
  Colonne 3: Marketing
    ├─ SEO
    ├─ Publicité
    └─ Analytics
```

_(Nécessite développement custom)_

---

## Bonnes Pratiques

### ✅ À Faire

1. **Gardez 5-7 liens max** dans le menu principal
2. **Utilisez des noms courts** et clairs
3. **Ordre logique** : Accueil → Services → Réalisations → Contact
4. **Testez sur mobile** : Les menus doivent être faciles à utiliser
5. **CTA visible** : Le bouton Contact doit se démarquer

### ❌ À Éviter

1. **Trop de liens** : Confusion et choix paralysant
2. **Sous-menus trop profonds** : Max 2 niveaux
3. **Noms vagues** : "Solutions" au lieu de "Services"
4. **Liens morts** : Vérifiez que toutes les pages existent
5. **Ordre illogique** : Contact avant Services

---

## Configuration dans le Thème

### Header

1. Allez dans **Personnaliser le thème**
2. Sélectionnez **Header**
3. Dans **Settings** :
   - **Menu** : Sélectionnez `main-menu`
   - **Show CTA** : Activé
   - **CTA Text** : "Contact" ou "Devis Gratuit"
   - **CTA Link** : `/pages/contact`

### Footer

1. Dans **Personnaliser le thème**
2. Sélectionnez **Footer**
3. Dans **Column 2** :
   - **Heading** : "Liens Rapides"
   - **Menu** : Sélectionnez `footer`

---

## Exemple de Configuration Complète

### Menu Principal

| Libellé | Type | Lien |
|---------|------|------|
| Accueil | Page | `/` |
| Services | Ancre | `#services` |
| Portfolio | Page | `/pages/portfolio` |
| À Propos | Page | `/pages/about` |
| Contact | Page | `/pages/contact` |

### Menu Footer

| Libellé | Lien |
|---------|------|
| Accueil | `/` |
| Services | `/pages/services` |
| Portfolio | `/pages/portfolio` |
| À Propos | `/pages/about` |
| Blog | `/blogs/news` |
| Contact | `/pages/contact` |
| Mentions Légales | `/pages/legal` |
| Confidentialité | `/pages/privacy` |
| CGV | `/pages/terms` |

---

## Test du Menu

### Checklist

- [ ] Tous les liens fonctionnent
- [ ] Les ancres scrollent correctement
- [ ] Le menu mobile s'ouvre/ferme bien
- [ ] Le bouton CTA est visible
- [ ] Les sous-menus s'affichent au survol (desktop)
- [ ] Le menu est lisible sur fond clair et foncé
- [ ] Pas de liens orphelins (pages inexistantes)

---

**Besoin d'aide ?** Consultez la [documentation Shopify sur les menus](https://help.shopify.com/en/manual/online-store/menus-and-links)
