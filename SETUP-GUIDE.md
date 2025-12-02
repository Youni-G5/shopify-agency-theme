# 🚀 Guide de Configuration Complète - Agency Pro

Ce guide vous accompagne étape par étape pour configurer votre thème Shopify **Agency Pro** et créer un site professionnel pour votre agence.

---

## 📋 Table des Matières

1. [Installation du Thème](#1-installation-du-thème)
2. [Création des Menus](#2-création-des-menus)
3. [Création des Pages](#3-création-des-pages)
4. [Personnalisation du Thème](#4-personnalisation-du-thème)
5. [Configuration des Sections](#5-configuration-des-sections)
6. [Ajout de Contenu](#6-ajout-de-contenu)
7. [Test et Publication](#7-test-et-publication)

---

## 1. Installation du Thème

### Option A : Via Shopify CLI (Recommandé)

```bash
# 1. Installer Shopify CLI
npm install -g @shopify/cli @shopify/theme

# 2. Cloner le repository
git clone https://github.com/Youni-G5/shopify-agency-theme.git
cd shopify-agency-theme

# 3. Se connecter à Shopify
shopify auth login

# 4. Pousser le thème
shopify theme push

# 5. Sélectionner comme thème actif (optionnel)
shopify theme publish
```

### Option B : Upload Manuel

1. Télécharger le repository en ZIP depuis GitHub
2. Aller dans **Boutique en ligne > Thèmes**
3. Cliquer sur **Ajouter un thème**
4. Sélectionner **Importer un fichier ZIP**
5. Uploader le fichier et attendre la fin de l'import
6. Cliquer sur **Personnaliser** pour commencer

---

## 2. Création des Menus

### Menu Principal (`main-menu`)

Allez dans **Navigation > Menu principal** et ajoutez ces liens :

1. **Accueil** → `/`
2. **Services** → `#services` (ancre vers la section)
3. **Portfolio** → `/pages/portfolio`
4. **À Propos** → `/pages/about`
5. **Contact** → `/pages/contact`

### Menu Footer (`footer`)

Créez un nouveau menu **footer** avec :

1. **Accueil** → `/`
2. **Services** → `/pages/services`
3. **Portfolio** → `/pages/portfolio`
4. **Blog** → `/blogs/news` (si vous avez un blog)
5. **Mentions Légales** → `/pages/legal`
6. **Politique de Confidentialité** → `/pages/privacy`
7. **CGV** → `/pages/terms`

**💡 Astuce** : Pour créer un menu, allez dans **Navigation** puis cliquez sur **Ajouter un menu**.

---

## 3. Création des Pages

Allez dans **Boutique en ligne > Pages** et créez les pages suivantes :

### Page Contact (`contact`)

- **Titre** : Contactez-Nous
- **Template** : `page.contact`
- **Contenu** : (voir `content-templates/pages.md` pour le contenu suggéré)

### Page À Propos (`about`)

- **Titre** : À Propos de Nous
- **Template** : `page.about`
- **Contenu** : 

```html
<p>Depuis [année], nous sommes spécialisés dans la création de boutiques Shopify performantes et sur-mesure pour des entrepreneurs passionnés.</p>

<h2>Notre Mission</h2>
<p>Aider les entreprises à réussir en ligne grâce à des solutions e-commerce innovantes, esthétiques et optimisées pour la conversion.</p>

<h2>Notre Expertise</h2>
<ul>
  <li>Développement de thèmes Shopify personnalisés</li>
  <li>Optimisation des performances et du SEO</li>
  <li>Design UI/UX moderne et responsive</li>
  <li>Intégration d'applications tierces</li>
  <li>Support et maintenance continue</li>
</ul>

<h2>Pourquoi Nous Choisir ?</h2>
<p>Nous combinons expertise technique, sens du design et compréhension approfondie des enjeux e-commerce pour créer des boutiques qui convertissent et dépassent vos objectifs.</p>
```

### Page Portfolio (`portfolio`)

- **Titre** : Notre Portfolio
- **Template** : `page.portfolio`
- **Contenu** : Laissez vide (le contenu est géré par les sections)

### Page Services (optionnelle)

- **Titre** : Nos Services
- **Template** : `page`
- **Contenu** :

```html
<h2>Développement de Thèmes Shopify</h2>
<p>Création de thèmes sur-mesure, rapides, sécurisés et optimisés pour la conversion. Chaque thème est conçu selon vos besoins spécifiques et votre identité de marque.</p>

<h2>Design UI/UX</h2>
<p>Conception d'interfaces modernes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.</p>

<h2>Optimisation Performance</h2>
<p>Amélioration des temps de chargement, optimisation du code et des images pour un meilleur référencement et une expérience utilisateur fluide.</p>

<h2>Intégrations & Apps</h2>
<p>Configuration et intégration d'applications Shopify pour étendre les fonctionnalités de votre boutique (paiement, marketing, logistique, etc.).</p>

<h2>Support & Maintenance</h2>
<p>Accompagnement continu, mises à jour régulières et support technique pour garantir le bon fonctionnement de votre boutique.</p>
```

### Pages Légales

Créez aussi ces pages importantes :

1. **Mentions Légales** (`legal`)
2. **Politique de Confidentialité** (`privacy`)
3. **Conditions Générales** (`terms`)

**💡 Astuce** : Shopify peut générer automatiquement certaines pages légales. Allez dans **Paramètres > Juridique**.

---

## 4. Personnalisation du Thème

Allez dans **Thèmes > Personnaliser** puis configurez :

### Paramètres du Thème

#### Colors (Couleurs)

- **Primary Color** : Votre couleur de marque principale (ex: #2563eb)
- **Secondary Color** : Couleur secondaire pour dégradés (ex: #7c3aed)
- **Accent Color** : Couleur d'accentuation (ex: #f59e0b)
- **Text Color** : Couleur du texte (ex: #1f2937)
- **Background Color** : Couleur de fond (ex: #ffffff)

**🎨 Conseil** : Utilisez un outil comme [Coolors](https://coolors.co) pour créer une palette harmonieus e.

#### Typography (Typographie)

- **Heading Font** : Police pour les titres (ex: Montserrat, Poppins, Roboto)
- **Body Font** : Police pour le texte (ex: Open Sans, Lato, Inter)
- **Base Font Size** : Taille de base (recommandé : 16px)

#### Logo

1. Uploadez votre logo (format PNG ou SVG recommandé)
2. Ajustez la largeur (recommandé : 150-200px)

**📸 Spécifications Logo** :
- Format : PNG transparent ou SVG
- Taille recommandée : 300x100px minimum
- Résolution : 2x pour Retina (600x200px)

#### Social Media (Réseaux Sociaux)

Ajoutez vos URLs :
- Facebook
- Instagram
- LinkedIn
- Twitter
- TikTok

---

## 5. Configuration des Sections

### Page d'Accueil

Dans l'éditeur de thème, personnalisez les sections :

#### Hero Banner
- **Heading** : "Créez Votre Boutique Shopify Sur-Mesure"
- **Subheading** : "Conception de thèmes personnalisés, développement..."
- **Primary Button** : "Démarrer Un Projet" → `/pages/contact`
- **Secondary Button** : "Voir Portfolio" → `#portfolio`

#### Services Grid

Ajoutez 6 blocs de services avec :
1. **Développement de Thèmes** (icône: code)
2. **Design UI/UX** (icône: palette)
3. **Optimisation Performance** (icône: rocket)
4. **Responsive Design** (icône: mobile)
5. **Intégrations Apps** (icône: plugin)
6. **Support & Maintenance** (icône: support)

#### Portfolio Grid

Ajoutez vos projets avec :
- Image du projet (1200x800px recommandé)
- Titre du projet
- Catégorie (ex: "E-commerce Mode", "Boutique Sport")
- Description courte
- Lien vers la boutique (optionnel)

**💡 Astuce** : Créez au moins 3 projets pour un rendu professionnel.

#### Testimonials

Ajoutez 3-6 témoignages avec :
- Photo du client (optionnel)
- Citation
- Nom du client
- Poste/Entreprise

**Exemple** :
> "Une équipe exceptionnelle qui a transformé notre vision en une boutique magnifique et performante. Notre chiffre d'affaires a augmenté de 150% en 3 mois !"
> 
> **Sophie Martin** - CEO, Fashion Boutique

#### Call to Action
- **Heading** : "Prêt à Lancer Votre Projet ?"
- **Subheading** : "Discutons de vos besoins..."
- **Button** : "Demander Un Devis" → `/pages/contact`

### Header (En-tête)

Dans **Header** :
- Sélectionnez le menu **main-menu**
- Activez le bouton CTA
- Texte CTA : "Contact"
- Lien CTA : `/pages/contact`

### Footer (Pied de page)

Dans **Footer** :
- **Column 1** : Texte "About" avec description de votre agence
- **Column 2** : Menu **footer**
- **Column 3** : Informations de contact (email, téléphone)
- **Copyright** : "Tous droits réservés."

---

## 6. Ajout de Contenu

### Page Contact

La page contact est déjà configurée avec :
- Formulaire de contact automatique
- Champs : Nom, Email, Téléphone, Entreprise, Message
- Section informations de contact

**Configuration des infos de contact** :
1. Allez dans la section **Contact Info**
2. Ajoutez 3 blocs :
   - **Email** (icône email) : votre@email.com
   - **Téléphone** (icône phone) : +33 X XX XX XX XX
   - **Localisation** (icône location) : Ville, Pays

### Page À Propos

#### Section Stats

Ajoutez 4 statistiques :
1. **50+** - Projets Réalisés
2. **5+** - Années d'Expérience
3. **100%** - Clients Satisfaits
4. **24/7** - Support Disponible

#### Section Team

Ajoutez les membres de votre équipe :
- Photo (300x300px, ronde)
- Nom
- Rôle
- Bio courte

---

## 7. Test et Publication

### Checklist Avant Publication

- [ ] Toutes les pages sont créées et contiennent du contenu
- [ ] Les menus sont configurés et fonctionnels
- [ ] Le logo est uploadé et bien dimensionné
- [ ] Les couleurs correspondent à votre marque
- [ ] Les liens sociaux sont ajoutés
- [ ] Au moins 3 projets dans le portfolio
- [ ] Au moins 3 témoignages
- [ ] Informations de contact correctes
- [ ] Test sur mobile (responsive)
- [ ] Test sur tablette
- [ ] Test sur desktop
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact testé
- [ ] Pages légales complètes

### Test Multi-appareils

1. **Mobile** : Menu hamburger, navigation, formulaires
2. **Tablette** : Grilles à 2 colonnes, images
3. **Desktop** : Layout complet, animations

**📱 Conseil** : Utilisez les outils de développement Chrome (F12) pour tester différentes tailles d'écran.

### Test de Performance

1. Allez sur [PageSpeed Insights](https://pagespeed.web.dev/)
2. Testez votre page d'accueil
3. Visez un score > 80 sur mobile et desktop

### Publication

1. Vérifiez tout avec la checklist
2. Allez dans **Thèmes**
3. Cliquez sur **Actions > Publier** sur Agency Pro
4. Confirmez la publication

---

## 🎉 Félicitations !

Votre site est maintenant en ligne ! 

### Prochaines Étapes

1. **SEO** : Optimisez les meta descriptions de chaque page
2. **Blog** : Créez un blog pour partager votre expertise
3. **Analytics** : Installez Google Analytics
4. **Social Proof** : Ajoutez plus de témoignages et cas d'études
5. **Marketing** : Partagez votre nouveau site sur les réseaux sociaux

---

## ❓ Besoin d'Aide ?

- **Documentation Shopify** : [shopify.dev/docs/themes](https://shopify.dev/docs/themes)
- **GitHub Issues** : [Ouvrir un ticket](https://github.com/Youni-G5/shopify-agency-theme/issues)
- **Email** : contact@offside-shop.com

---

**Bon lancement ! 🚀**
