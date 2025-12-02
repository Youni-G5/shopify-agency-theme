# Agency Pro - Thème Shopify pour Agence Web

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Shopify](https://img.shields.io/badge/shopify-compatible-green)
![License](https://img.shields.io/badge/license-MIT-green)

Un thème Shopify moderne et performant conçu spécifiquement pour les agences de création de sites web et les développeurs Shopify qui souhaitent présenter leurs services et leur portfolio.

## 🌟 Caractéristiques Principales

### Design & UX
- ✅ **Design moderne et élégant** avec dégradés personnalisables
- ✅ **100% Responsive** - Parfaitement adapté mobile, tablette et desktop
- ✅ **Animations fluides** avec Intersection Observer
- ✅ **Interface intuitive** avec navigation sticky
- ✅ **Accessibilité WCAG** - Skip links et aria-labels

### Performance
- ⚡ **JavaScript minimal** - Optimisé pour les performances
- ⚡ **Images lazy loading** - Chargement différé des images
- ⚡ **CSS optimisé** - Pas de frameworks lourds
- ⚡ **Fonts optimisées** avec font-display: swap

### Fonctionnalités
- 🎨 **Personnalisation complète** via l'éditeur de thème Shopify
- 🎨 **Sections modulaires** - Glisser-déposer dans l'éditeur
- 🌍 **Multilingue** - Support FR/EN inclus
- 📧 **SEO optimisé** - Meta tags Open Graph et Twitter Cards
- 🔗 **Intégration réseaux sociaux** - Liens personnalisables

## 📚 Structure du Thème

```
shopify-agency-theme/
├── assets/
│   ├── theme.css          # Feuille de style principale
│   └── theme.js           # JavaScript du thème
├── config/
│   ├── settings_schema.json  # Configuration du thème
│   └── settings_data.json    # Données par défaut
├── layout/
│   └── theme.liquid       # Template principal
├── locales/
│   ├── en.default.json    # Traductions anglais
│   └── fr.json            # Traductions français
├── sections/
│   ├── header.liquid           # En-tête du site
│   ├── footer.liquid           # Pied de page
│   ├── hero-banner.liquid      # Bannière hero
│   ├── services-grid.liquid    # Grille de services
│   ├── portfolio-grid.liquid   # Portfolio projets
│   ├── testimonials-slider.liquid  # Témoignages
│   ├── call-to-action.liquid   # Section CTA
│   └── main-page.liquid        # Contenu de page
├── snippets/
│   └── meta-tags.liquid   # Meta tags SEO
├── templates/
│   ├── index.json         # Page d'accueil
│   └── page.json          # Template de page
└── README.md
```

## 🚀 Installation

### Méthode 1 : Via Shopify CLI (Recommandé)

1. **Installer Shopify CLI**
```bash
npm install -g @shopify/cli @shopify/theme
```

2. **Cloner le repository**
```bash
git clone https://github.com/Youni-G5/shopify-agency-theme.git
cd shopify-agency-theme
```

3. **Se connecter à Shopify**
```bash
shopify auth login
```

4. **Pousser le thème vers votre boutique**
```bash
shopify theme push
```

5. **Mode développement (optionnel)**
```bash
shopify theme dev
```

### Méthode 2 : Upload Manuel

1. Télécharger le repository en ZIP
2. Aller dans **Boutique en ligne > Thèmes**
3. Cliquer sur **Ajouter un thème > Importer un fichier ZIP**
4. Sélectionner le fichier ZIP et uploader

## ⚙️ Configuration

### 1. Personnalisation des Couleurs

Allez dans **Thèmes > Personnaliser > Paramètres du thème > Colors** :

- **Primary Color** : Couleur principale de la marque
- **Secondary Color** : Couleur secondaire (dégradés)
- **Accent Color** : Couleur d'accentuation
- **Text Color** : Couleur du texte
- **Background Color** : Couleur de fond

### 2. Logo et Typographie

**Logo** :
- Format recommandé : PNG ou SVG transparent
- Taille recommandée : 300x100px minimum
- Upload dans **Paramètres du thème > Logo**

**Polices** :
- Sélectionnez vos polices dans **Typography**
- Polices Google Fonts disponibles

### 3. Réseaux Sociaux

Ajoutez vos liens dans **Social Media** :
- Facebook
- Instagram
- LinkedIn
- Twitter
- TikTok

### 4. Configuration des Sections

#### Hero Banner
- Titre principal
- Sous-titre
- 2 boutons CTA personnalisables
- Design avec dégradé automatique

#### Services Grid
- Jusqu'à 6 services affichés
- Icônes personnalisables (6 options)
- Grille responsive (1/2/3 colonnes)

#### Portfolio Grid
- Affichage des projets réalisés
- Images, catégories, descriptions
- Liens vers les pages de projets

#### Testimonials
- Témoignages clients
- Avatars personnalisables
- Notation 5 étoiles

#### Call to Action
- Section CTA avec dégradé
- Bouton de conversion

## 📝 Pages à Créer

Pour un site complet, créez ces pages dans **Pages** :

1. **À Propos** (`/pages/about`)
2. **Services** (`/pages/services`)
3. **Portfolio** (`/pages/portfolio`)
4. **Contact** (`/pages/contact`)
5. **Blog** (si nécessaire)

## 🎯 Menus à Configurer

Allez dans **Navigation** et créez :

### Menu Principal (`main-menu`)
- Accueil
- Services
- Portfolio
- À Propos
- Blog
- Contact

### Menu Footer (`footer`)
- Mentions légales
- Politique de confidentialité
- CGV
- FAQ

## 🛠️ Développement

### Prérequis
- Node.js 16+
- Shopify CLI
- Compte Shopify Partner (recommandé)

### Commandes Utiles

```bash
# Mode développement avec hot reload
shopify theme dev

# Pousser les changements
shopify theme push

# Télécharger le thème actuel
shopify theme pull

# Lister les thèmes
shopify theme list

# Publier le thème
shopify theme publish
```

### Structure CSS

Le CSS est organisé ainsi dans `assets/theme.css` :

1. **Reset & Base** - Réinitialisation et styles de base
2. **Utility Classes** - Classes utilitaires réutilisables
3. **Components** - Boutons, cartes, formulaires
4. **Layout** - Header, footer, grille
5. **Sections** - Styles spécifiques aux sections
6. **Responsive** - Media queries

### JavaScript

Fonctionnalités incluses dans `assets/theme.js` :
- Menu mobile toggle
- Smooth scroll pour ancres
- Animations au scroll (Intersection Observer)
- Validation de formulaires
- Fonction debounce

## 📊 SEO & Performance

### Méta Tags
Le snippet `meta-tags.liquid` génère automatiquement :
- Open Graph tags (Facebook)
- Twitter Cards
- Meta descriptions
- Images optimisées (1200x630px)

### Performance Tips
1. **Images** : Utilisez le format WebP quand possible
2. **Lazy Loading** : Activé par défaut sur toutes les images
3. **Fonts** : font-display: swap pour éviter le FOIT
4. **JavaScript** : Chargé avec defer

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Section

1. Créer `sections/ma-section.liquid`
2. Ajouter le schéma JSON à la fin du fichier
3. La section apparaîtra dans l'éditeur

### Variables CSS Personnalisées

Les variables CSS sont définies dans `theme.liquid` :

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent: #f59e0b;
  --color-text: #1f2937;
  --color-background: #ffffff;
  --font-heading: ...
  --font-body: ...
  --font-size-base: 16px;
}
```

Utilisez-les avec `var(--color-primary)` dans votre CSS.

## 💻 Support & Contribution

### Rapporter un Bug
Ouvrez une issue sur GitHub avec :
- Description du problème
- Étapes pour reproduire
- Captures d'écran si possible
- Version de Shopify

### Contribuer
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## ❤️ Créé Par

**OFFSIDE**
- Website: [offside-shop.com](https://offside-shop.com)
- GitHub: [@Youni-G5](https://github.com/Youni-G5)

## 🚀 Prochaines Évolutions

- [ ] Template de page contact avec formulaire
- [ ] Section blog avec articles
- [ ] Section FAQ avec accordions
- [ ] Template de page portfolio détaillée
- [ ] Intégration Shopify App Blocks
- [ ] Mode sombre
- [ ] Animations avancées
- [ ] Section pricing/tarifs

---

**Besoin d'aide ?** N'hésitez pas à ouvrir une issue ou à me contacter directement.

**Vous aimez ce thème ?** Mettez une ⭐ sur GitHub !
