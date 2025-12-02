/**
 * AGENCY PRO - ADVANCED ANIMATIONS
 * Scroll Reveals, Parallax, Cursor Effects, Micro-interactions
 */

class ModernAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollReveal();
    this.setupParallax();
    this.setupMagneticElements();
    this.setupCursorFollower();
    this.setupSmoothScroll();
    this.setupDarkModeToggle();
    this.setupNavigation();
    this.setupMicroInteractions();
  }

  // ========================================
  // 1. SCROLL REVEAL ANIMATIONS
  // ========================================
  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after reveal for performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale'
    );
    revealElements.forEach(el => observer.observe(el));
  }

  // ========================================
  // 2. PARALLAX SCROLLING EFFECTS
  // ========================================
  setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(el => {
        const speed = el.dataset.parallaxSpeed || 0.5;
        const offset = scrolled * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ========================================
  // 3. MAGNETIC ELEMENTS (Button Attraction)
  // ========================================
  setupMagneticElements() {
    const magneticElements = document.querySelectorAll('.magnetic');

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Magnetic strength
        const strength = 0.3;
        
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ========================================
  // 4. CUSTOM CURSOR FOLLOWER
  // ========================================
  setupCursorFollower() {
    // Only on desktop
    if (window.innerWidth < 768) return;

    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorOutline);

    // Add CSS
    const style = document.createElement('style');
    style.textContent = `
      .cursor-dot,
      .cursor-outline {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
      }

      .cursor-dot {
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        transition: transform 0.1s ease;
      }

      .cursor-outline {
        width: 32px;
        height: 32px;
        border: 2px solid white;
        border-radius: 50%;
        transition: all 0.15s ease;
      }

      .cursor-hover .cursor-dot {
        transform: scale(2);
      }

      .cursor-hover .cursor-outline {
        transform: scale(1.5);
        border-color: var(--color-primary);
      }
    `;
    document.head.appendChild(style);

    // Track cursor position
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor animation
    const animateCursor = () => {
      // Dot follows directly
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;

      // Outline follows with delay
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
      cursorOutline.style.transform = `translate(${outlineX - 16}px, ${outlineY - 16}px)`;

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  }

  // ========================================
  // 5. SMOOTH SCROLL TO ANCHORS
  // ========================================
  setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ========================================
  // 6. DARK MODE TOGGLE
  // ========================================
  setupDarkModeToggle() {
    const toggle = document.querySelector('.dark-mode-toggle');
    if (!toggle) return;

    // Check for saved preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    toggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update icon
      const icon = toggle.querySelector('svg');
      if (icon) {
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          icon.style.transform = 'rotate(0deg)';
        }, 300);
      }
    });
  }

  // ========================================
  // 7. NAVIGATION SCROLL BEHAVIOR
  // ========================================
  setupNavigation() {
    const nav = document.querySelector('.nav-modern');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > 100) {
        nav.style.boxShadow = 'var(--shadow-xl)';
      } else {
        nav.style.boxShadow = 'var(--glass-shadow)';
      }

      // Hide on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 300) {
        nav.style.transform = 'translateX(-50%) translateY(-120%)';
      } else {
        nav.style.transform = 'translateX(-50%) translateY(0)';
      }

      lastScroll = currentScroll;
    });
  }

  // ========================================
  // 8. MICRO-INTERACTIONS
  // ========================================
  setupMicroInteractions() {
    // Number Counter Animation
    this.animateCounters();
    
    // Tilt Effect on Cards
    this.setupCardTilt();
    
    // Glitch Text Effect
    this.setupGlitchText();
  }

  animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.dataset.count);
          const duration = 2000; // 2 seconds
          const increment = count / (duration / 16); // 60fps
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < count) {
              target.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = count;
            }
          };

          updateCounter();
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  setupCardTilt() {
    const cards = document.querySelectorAll('.card-tilt');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  setupGlitchText() {
    const glitchElements = document.querySelectorAll('.text-glitch');

    glitchElements.forEach(el => {
      const text = el.textContent;
      el.setAttribute('data-text', text);

      setInterval(() => {
        if (Math.random() > 0.9) {
          el.classList.add('glitching');
          setTimeout(() => {
            el.classList.remove('glitching');
          }, 100);
        }
      }, 3000);
    });
  }
}

// ========================================
// PARTICLE SYSTEM (Optional Background)
// ========================================
class ParticleSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 100;

    this.init();
  }

  init() {
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '1';

    this.container.style.position = 'relative';
    this.container.appendChild(this.canvas);

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.createParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around edges
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.y > this.canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = this.canvas.height;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
      this.ctx.fill();
    });

    // Draw connections
    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      });
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ========================================
// INITIALIZE ON DOM READY
// ========================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

function initAnimations() {
  // Main animations
  new ModernAnimations();
  
  // Optional: Particle background for hero
  const heroParticles = new ParticleSystem('hero-particles');
  
  console.log('🎨 Modern animations initialized');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ModernAnimations, ParticleSystem };
}
