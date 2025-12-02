# 🎨 Agency Pro - Thème Shopify Moderne

> Thème Shopify ultra-moderne pour agences web et freelances, inspiré des sites primés Awwwards.

[![Shopify](https://img.shields.io/badge/Shopify-2.0-green?style=for-the-badge&logo=shopify)](https://shopify.dev/docs/themes)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)]()  

![Hero Preview](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Agency+Pro+Theme)

---

## ✨ Fonctionnalités

### 🎨 Design Moderne

- **Glassmorphism** - Effet verre translucide sur cards et navigation
- **Gradients Animés** - Dégradés vivants qui bougent
- **Formes Organiques** - Shapes fluides en arrière-plan avec morphing
- **Typographie Audacieuse** - Titres XXL avec gradients
- **Mode Sombre** - Dark mode avec toggle animé et persistence

### 🚀 Animations Avancées

- **Scroll Reveals** - Éléments apparaissent au scroll (Intersection Observer)
- **Parallax** - Profondeur multi-couches
- **Micro-interactions** - Feedback visuel sur chaque action
- **Card Tilt 3D** - Effet de profondeur au survol souris
- **Compteurs Animés** - Statistiques qui comptent progressivement
- **Cursor Personnalisé** - Curseur avec trail effect (desktop)
- **Boutons Magnétiques** - Attirent le curseur au survol

### 📱 Responsive & Performance

- **Mobile-First** - Optimisé pour tous les appareils
- **Menu Mobile** - Slide-in avec overlay translucide
- **GPU Accelerated** - Animations fluides 60fps
- **Lazy Loading** - Images chargées à la demande
- **No Dependencies** - Pas de jQuery, Vanilla JS uniquement
- **PageSpeed 90+** - Performance optimale garantie

### ♿ Accessibilité

- **WCAG AA** - Contraste et lisibilité respectés
- **Prefers-Reduced-Motion** - Respect des préférences utilisateur
- **ARIA Labels** - Navigation au clavier complète
- **Focus Visible** - Indicateurs visuels clairs

### 🔍 SEO

- **Schema Markup** - Données structurées JSON-LD
- **Meta Tags** - Open Graph et Twitter Cards
- **Sitemap Auto** - Généré par Shopify
- **URLs Propres** - Structure SEO-friendly
- **Performance** - Core Web Vitals optimisés

---

## 💻 Tech Stack

- **Shopify 2.0** - Architecture moderne avec sections partout
- **Liquid** - Templating Shopify
- **CSS Variables** - Design tokens pour personnalisation facile
- **Vanilla JavaScript** - Pas de frameworks lourds
- **Intersection Observer** - Animations performantes
- **RequestAnimationFrame** - Animations fluides

---

## 📦 Structure du Projet

```
shopify-agency-theme/
├── assets/
│   ├── theme-redesign.css      # Design system complet (1000+ lignes)
│   ├── animations.js            # Animations JavaScript (500+ lignes)
│   └── theme.css                # Styles complémentaires
├── layout/
│   └── theme.liquid             # Layout principal
├── sections/
│   ├── header-modern.liquid     # Navigation glassmorphism
│   ├── footer-modern.liquid     # Footer avec newsletter
│   ├── hero-modern.liquid       # Hero immersif
│   ├── features-glassmorphism.liquid  # Cards effet verre
│   ├── portfolio-modern.liquid  # Grille portfolio
│   └── ... (autres sections)
├── snippets/
│   ├── meta-tags.liquid         # SEO meta tags
│   └── schema-json-ld.liquid    # Données structurées
├── templates/
│   ├── index.json               # Homepage
│   ├── page.services.json       # Page services
│   └── ... (autres templates)
├── config/
│   └── settings_schema.json     # Paramètres thème
├── DESIGN-SYSTEM-GUIDE.md   # Guide complet (ce fichier)
├── SEO-GUIDE.md              # Guide SEO
└── README.md                 # Documentation principale
```

---

## 🚀 Installation

### Méthode 1 : Shopify CLI (Recommandé)

```bash
# 1. Clone le repo
git clone https://github.com/Youni-G5/shopify-agency-theme.git
cd shopify-agency-theme

# 2. Connecte-toi à ton store
shopify login --store ton-store.myshopify.com

# 3. Push le thème
shopify theme push

# 4. Ouvre l'éditeur
shopify theme dev
```

### Méthode 2 : Upload ZIP

1. Télécharge le repo en ZIP
2. Shopify Admin > **Boutique en ligne** > **Thèmes**
3. **Ajouter un thème** > **Importer depuis fichier**
4. Upload le ZIP
5. **Personnaliser** le thème

---

## ⚡ Quick Start

### 1. Configuration de Base

**Header**
1. Ouvre l'éditeur de thème
2. Clique sur **Header**
3. Upload ton logo (ou garde le nom du shop)
4. Sélectionne ton menu principal
5. Configure le bouton CTA

**Footer**
1. Clique sur **Footer**
2. Ajoute tes réseaux sociaux
3. Configure la newsletter
4. Ajoute 3 colonnes de menu

### 2. Personnaliser les Couleurs

Ouvre `assets/theme-redesign.css` :

```css
:root {
  --color-primary: #6366f1;      /* Ta couleur principale */
  --color-secondary: #8b5cf6;    /* Ta couleur secondaire */
  --color-accent: #f59e0b;       /* Ta couleur accent */
}
```

### 3. Ajouter du Contenu

**Homepage**
- Modifie les textes du Hero
- Ajoute tes features (6 incluses par défaut)
- Upload images de projets
- Configure les stats

**Pages**
- Crée `/pages/services`
- Crée `/pages/portfolio`
- Crée `/pages/about`
- Crée `/pages/contact`

---

## 🎨 Personnalisation Avancée

### Animations

```html
<!-- Fade + Slide Up -->
<div class="scroll-reveal">
  Contenu qui apparaît
</div>

<!-- Effet Magnétique -->
<button class="btn btn-primary magnetic">
  Bouton Magnétique
</button>

<!-- Card 3D Tilt -->
<div class="card card-tilt">
  Card interactive
</div>
```

### Effets Glassmorphism

```html
<div class="glass-card">
  <h3>Titre</h3>
  <p>Contenu avec effet verre</p>
</div>
```

### Gradients sur Texte

```html
<h1 class="text-gradient-primary">
  Texte avec Gradient
</h1>
```

### Compteurs Animés

```html
<div data-count="250">0</div>
<!-- Comptera de 0 à 250 automatiquement -->
```

---

## 📚 Documentation Complète

Consulte ces guides pour plus de détails :

- **[DESIGN-SYSTEM-GUIDE.md](DESIGN-SYSTEM-GUIDE.md)** - Guide complet du design system
- **[SEO-GUIDE.md](SEO-GUIDE.md)** - Optimisation SEO
- **[CHANGELOG.md](CHANGELOG.md)** - Historique des versions

---

## 🐛 Support

### Documentation
- [Shopify Theme Docs](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)

### Problèmes Connus

**Header/Footer invisible ?**
- Vérifie que `theme.liquid` contient `{% section 'header-modern' %}`

**Animations ne marchent pas ?**
- Vérifie que `animations.js` est chargé dans `theme.liquid`

**Menu mobile ne s'ouvre pas ?**
- Ouvre la console JavaScript pour voir les erreurs

---

## 🚀 Performance

### Lighthouse Scores Attendus

- **Performance** : 90+
- **Accessibility** : 95+
- **Best Practices** : 100
- **SEO** : 100

### Optimisations Incluses

✅ GPU acceleration sur animations  
✅ Lazy loading natif  
✅ Will-change optimisé  
✅ RequestAnimationFrame  
✅ Intersection Observer  
✅ Pas de jQuery  
✅ CSS Variables (pas de Sass)  
✅ Prefers-reduced-motion  

---

## 🎓 Ressources

### Inspiration Design
- [Awwwards](https://www.awwwards.com/websites/design-agencies/)
- [CSS Design Awards](https://www.cssdesignawards.com/)
- [Behance](https://www.behance.net/)

### Outils
- [TinyPNG](https://tinypng.com/) - Compression images
- [PageSpeed Insights](https://pagespeed.web.dev/) - Test performance
- [WAVE](https://wave.webaim.org/) - Test accessibilité

---

## 📝 License

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

---

## 👏 Crédits

**Design System** inspiré par :
- Sites primés Awwwards 2025
- By Association Only (BAO)
- Tendances design modernes

**Créé avec** ❤️ **par** [OFFSIDE](https://github.com/Youni-G5)

---

## ⭐ Star ce Repo

Si ce thème t'aide, n'hésite pas à mettre une ⭐ sur GitHub !

---

**🚀 Bon développement !**
