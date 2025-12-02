# 🎨 Guide du Design System Moderne

## 🎉 Ce Qui a Changé

Votre thème a été complètement transformé avec un design system moderne inspiré des sites primés Awwwards !

### Fichiers Clés Modifiés/Ajoutés

**Layout**
- ✅ `layout/theme.liquid` - Fichier principal mis à jour pour charger les nouveaux CSS/JS

**Sections Modernes**
- ✅ `sections/header-modern.liquid` - Navigation glassmorphism avec menu mobile
- ✅ `sections/footer-modern.liquid` - Footer avec newsletter et réseaux sociaux
- ✅ `sections/hero-modern.liquid` - Hero immersif avec formes flottantes animées
- ✅ `sections/features-glassmorphism.liquid` - Cards en verre avec effets 3D
- ✅ `sections/portfolio-modern.liquid` - Grille portfolio avec hover sophistiqués

**Assets (CSS/JS)**
- ✅ `assets/theme-redesign.css` - Design system complet (16 sections de styles)
- ✅ `assets/animations.js` - Animations JavaScript avancées

**Templates**
- ✅ `templates/index.json` - Homepage restructurée avec nouvelles sections

---

## 🚀 Quick Start

### 1. Activer le Thème dans Shopify

```bash
# Si tu utilises Shopify CLI
shopify theme push

# Ou upload via l'admin Shopify
# Boutique en ligne > Thèmes > Ajouter un thème > Importer depuis GitHub
```

### 2. Configurer le Header

1. Va dans **Boutique en ligne > Thèmes > Personnaliser**
2. Clique sur **Header** (en haut de la page)
3. Configure :
   - Upload ton logo (ou laisse le nom du shop)
   - Sélectionne ton menu principal
   - Active le bouton CTA
   - Texte CTA : "Devis Gratuit" ou "Contactez-nous"
   - Lien CTA : `/pages/contact`

### 3. Configurer le Footer

1. Clique sur **Footer** (en bas de la page)
2. Configure :
   - Texte "About"
   - Active la newsletter
   - Ajoute tes liens réseaux sociaux (Facebook, Instagram, LinkedIn, Twitter)
   - Ajoute 3 colonnes de menu (Services, Entreprise, Ressources)

### 4. Personnaliser la Homepage

La homepage contient 3 sections principales :

**Hero Modern**
- Texte principal avec gradient animé
- 2 boutons CTA
- 3 statistiques animées
- Formes flottantes en arrière-plan

**Features Glassmorphism**
- 6 cards en verre avec effets hover
- Icons emoji personnalisables
- Effet tilt 3D au survol

**Portfolio Modern**
- 4 projets en grille
- Hover effects sur images
- Tags et catégories
- Bouton "Voir tous les projets"

---

## 🎨 Personnalisation des Couleurs

### Via CSS Variables (Recommandé)

Ouvre `assets/theme-redesign.css` et modifie les variables dans `:root` :

```css
:root {
  /* Tes couleurs de marque */
  --color-primary: #6366f1;      /* Couleur principale */
  --color-secondary: #8b5cf6;    /* Couleur secondaire */
  --color-accent: #f59e0b;       /* Couleur accent */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #TaCouleur1 0%, #TaCouleur2 100%);
}
```

### Palettes Pré-définies

**Option 1 - Électrique (par défaut)**
```css
--color-primary: #6366f1;    /* Indigo */
--color-secondary: #ec4899;  /* Rose */
--color-accent: #f59e0b;     /* Ambre */
```

**Option 2 - Océan**
```css
--color-primary: #0ea5e9;    /* Sky blue */
--color-secondary: #06b6d4;  /* Cyan */
--color-accent: #14b8a6;     /* Teal */
```

**Option 3 - Forêt**
```css
--color-primary: #10b981;    /* Emerald */
--color-secondary: #22c55e;  /* Green */
--color-accent: #84cc16;     /* Lime */
```

**Option 4 - Sunset**
```css
--color-primary: #f97316;    /* Orange */
--color-secondary: #ef4444;  /* Red */
--color-accent: #f59e0b;     /* Amber */
```

**Option 5 - Luxe**
```css
--color-primary: #7c3aed;    /* Violet */
--color-secondary: #a855f7;  /* Purple */
--color-accent: #d946ef;     /* Fuchsia */
```

---

## ✨ Fonctionnalités Innovantes

### 1. Glassmorphism (Effet Verre)

Utilise la classe `.glass` ou `.glass-card` :

```html
<div class="glass-card">
  <h3>Mon Contenu</h3>
  <p>Texte avec effet verre derrière</p>
</div>
```

### 2. Animations Scroll

Ajoute ces classes pour des animations au scroll :

```html
<!-- Fade + Slide Up -->
<div class="scroll-reveal">
  Apparaît en montant
</div>

<!-- Slide from Left -->
<div class="scroll-reveal-left">
  Arrive de la gauche
</div>

<!-- Slide from Right -->
<div class="scroll-reveal-right">
  Arrive de la droite
</div>

<!-- Scale In -->
<div class="scroll-scale">
  Zoom progressif
</div>
```

### 3. Boutons Magnétiques

Les boutons avec classe `.magnetic` suivent le curseur :

```html
<a href="#" class="btn btn-primary magnetic">
  Bouton Magnétique
</a>
```

### 4. Effets Hover

```html
<!-- Lift Effect -->
<div class="card hover-lift">Soulèvement au hover</div>

<!-- Grow Effect -->
<div class="hover-grow">Agrandissement</div>

<!-- Glow Effect -->
<div class="btn hover-glow">Lueur au hover</div>

<!-- Rotate Effect -->
<div class="hover-rotate">Rotation légère</div>
```

### 5. Gradient Text

```html
<h1 class="text-gradient-primary">
  Texte avec Gradient
</h1>

<h2 class="text-gradient-vivid">
  Gradient Arc-en-ciel
</h2>
```

### 6. Cards 3D Tilt

Ajoute `.card-tilt` pour effet 3D au survol :

```html
<div class="card card-tilt">
  <h3>Card Interactive</h3>
  <p>Bouge avec ta souris !</p>
</div>
```

### 7. Compteurs Animés

```html
<div data-count="150">
  0
</div>
<!-- Comptera automatiquement de 0 à 150 au scroll -->
```

### 8. Parallax

```html
<div data-parallax data-parallax-speed="0.5">
  <img src="image.jpg" alt="Image parallax">
</div>
```

---

## 🔧 Personnaliser les Sections

### Hero Modern

**Variables modifiables** :
- `eyebrow` : Petit texte au-dessus du titre
- `heading` : Titre principal (supporte HTML pour gradients)
- `subheading` : Sous-titre
- `primary_button_text/link` : Bouton principal
- `secondary_button_text/link` : Bouton secondaire
- `show_stats` : Afficher les statistiques
- `stat_X_number/label` : Valeurs des stats

**Personnaliser les formes flottantes** :

Dans `sections/hero-modern.liquid`, cherche `.floating-shape` et modifie :
- `background` : Couleur de la forme
- `width/height` : Taille
- `top/left/bottom/right` : Position

### Features Glassmorphism

**Ajouter/Modifier une feature** :

1. Dans l'éditeur de thème
2. Clique sur la section "Features"
3. "Ajouter un bloc" > "Feature"
4. Configure :
   - Icon (emoji) : 🚀, 🎨, 💎, etc.
   - Titre
   - Description
   - Lien optionnel

### Portfolio Modern

**Ajouter un projet** :

1. Clique sur "Portfolio Modern"
2. "Ajouter un bloc" > "Project"
3. Configure :
   - Image du projet (1600x1000px recommandé)
   - Catégorie
   - Titre
   - Description
   - Tags (séparés par des virgules)
   - Lien vers page projet

---

## 🌌 Navigation & Menus

### Créer les Menus

1. Va dans **Navigation** dans l'admin Shopify
2. Crée ces menus :

**Menu Principal** (main-menu)
```
Accueil      -> /
Services     -> /pages/services
Portfolio    -> /pages/portfolio
À Propos     -> /pages/about
Blog         -> /blogs/news
Contact      -> /pages/contact
```

**Menu Footer - Services**
```
Thèmes Custom        -> /pages/themes
Optimisation SEO     -> /pages/seo
Support & Formation  -> /pages/support
Maintenance         -> /pages/maintenance
```

**Menu Footer - Entreprise**
```
À Propos           -> /pages/about
Notre Équipe        -> /pages/team
Carrières          -> /pages/careers
Contact            -> /pages/contact
```

**Menu Footer - Ressources**
```
Blog               -> /blogs/news
Guides             -> /pages/guides
FAQ                -> /pages/faq
Témoignages       -> /pages/testimonials
```

---

## 🎨 Mode Sombre

### Activation Auto

Le bouton de mode sombre est déjà intégré (coin bas-droit). Il :
- Sauvegarde la préférence dans localStorage
- Applique automatiquement au chargement
- Animation de rotation au clic

### Personnaliser les Couleurs Dark

Dans `assets/theme-redesign.css`, modifie `[data-theme="dark"]` :

```css
[data-theme="dark"] {
  --color-text: #f1f5f9;
  --color-bg: #0f172a;
  /* etc. */
}
```

---

## 📱 Responsive Design

Tout est responsive par défaut !

**Breakpoints** :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

**Menu Mobile** :
- Burger menu automatique < 768px
- Slide-in depuis la droite
- Overlay translucide

**Grilles** :
- Desktop : 3-4 colonnes
- Tablet : 2 colonnes
- Mobile : 1 colonne

---

## ⚡ Performance

### Déjà Optimisé

✅ **CSS**
- Variables CSS (pas de Sass/LESS)
- Will-change sur éléments animés
- GPU acceleration (transform/opacity)

✅ **JavaScript**
- Pas de jQuery (Vanilla JS)
- Intersection Observer pour scroll animations
- RequestAnimationFrame pour animations fluides
- Event delegation

✅ **Images**
- Lazy loading natif
- Responsive images avec srcset (si utilisé)
- Format WebP recommandé

✅ **Accessibilité**
- Prefers-reduced-motion respecté
- ARIA labels
- Focus visible
- Contraste WCAG AA

### Améliorer Encore

1. **Compresse tes images** avec TinyPNG ou Squoosh
2. **Utilise WebP** pour toutes les images
3. **Limite les apps Shopify** (max 10)
4. **Active le Shopify CDN** (automatique)

---

## 🐛 Dépannage

### Le header/footer ne s'affiche pas

✅ **Solution** : Vérifie que `theme.liquid` contient :
```liquid
{% section 'header-modern' %}
{{ content_for_layout }}
{% section 'footer-modern' %}
```

### Les animations ne fonctionnent pas

✅ **Solution** : Vérifie que `animations.js` est bien chargé :
```liquid
<script src="{{ 'animations.js' | asset_url }}" defer="defer"></script>
```

### Les styles ne s'appliquent pas

✅ **Solution** : Vérifie l'ordre de chargement dans `theme.liquid` :
```liquid
{{ 'theme-redesign.css' | asset_url | stylesheet_tag }}
{{ 'theme.css' | asset_url | stylesheet_tag }}
```

### Le menu mobile ne s'ouvre pas

✅ **Solution** : Vérifie la console JavaScript pour erreurs. Le script est dans `header-modern.liquid`.

### Les compteurs ne s'animent pas

✅ **Solution** : Ajoute l'attribut `data-count` :
```html
<div data-count="100">0</div>
```

---

## 🎯 Prochaines Étapes

### Pages à Créer

1. **Services** (`/pages/services`)
   - Utilise le template `page.services.json` déjà créé
   
2. **Portfolio** (`/pages/portfolio`)
   - Liste complète de tous tes projets
   - Filtres par catégorie
   
3. **À Propos** (`/pages/about`)
   - Histoire de l'agence
   - Équipe
   - Valeurs
   
4. **Contact** (`/pages/contact`)
   - Formulaire de contact
   - Coordonnées
   - Map (optionnel)

### Contenu à Ajouter

- ☐ Vraies images de projets (portfolio)
- ☐ Photos d'équipe
- ☐ Logo haute qualité
- ☐ Favicon
- ☐ Textes finaux
- ☐ Témoignages clients

### SEO

- ☐ Configurer Google Search Console
- ☐ Ajouter Google Analytics
- ☐ Optimiser meta descriptions
- ☐ Créer sitemap.xml (auto avec Shopify)
- ☐ Configurer redirections 301

---

## 📚 Ressources

### Documentation
- [Shopify Theme Documentation](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Inspiration Design
- [Awwwards](https://www.awwwards.com/websites/design-agencies/)
- [Behance](https://www.behance.net/)
- [Dribbble](https://dribbble.com/)

### Outils
- [TinyPNG](https://tinypng.com/) - Compression images
- [Squoosh](https://squoosh.app/) - Optimisation WebP
- [Google PageSpeed](https://pagespeed.web.dev/) - Test performance
- [WAVE](https://wave.webaim.org/) - Test accessibilité

---

## 👋 Besoin d'Aide ?

Si tu bloques sur quelque chose :

1. Vérifie ce guide
2. Regarde les commentaires dans le code
3. Consulte la [doc Shopify](https://shopify.dev/docs/themes)
4. Teste dans l'éditeur de thème Shopify

**Bon dev ! 🚀**
