// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú de navegación');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 30, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===== Intersection Observer for Fade In Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
const elementsToAnimate = document.querySelectorAll('.timeline-item, .skill-category, .achievement-card, .stat-card');
elementsToAnimate.forEach(el => observer.observe(el));

// ===== Form Submission =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert and log the data
    console.log('Form Data:', formData);
    
    // Create mailto link
    const mailtoLink = `mailto:danztty@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('¡Gracias por tu mensaje! Se abrirá tu cliente de correo para enviar el mensaje.');
    
    // Reset form
    contactForm.reset();
});

// ===== Typing Effect for Hero Title =====
const heroTitleEl = document.querySelector('.hero-title');
if (heroTitleEl) {
    const titles = {
        es: 'Hola, soy Daniel Bonalde',
        en: "Hi, I'm Daniel Bonalde"
    };
    const savedTypingLang = localStorage.getItem('preferredLanguage') || 'es';
    const typingText = titles[savedTypingLang] || titles.es;
    heroTitleEl.textContent = '';
    let index = 0;

    function typeText() {
        if (index < typingText.length) {
            heroTitleEl.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(typeText, 500);
}

// ===== Progress Bar Animation =====
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 200);
            progressObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

progressBars.forEach(bar => progressObserver.observe(bar));

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = element.innerText;
    const isPercentage = target.includes('%');
    const isPlusSign = target.includes('+');
    const hasK = target.includes('K');
    
    let numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (hasK) displayValue += 'K';
        if (isPlusSign) displayValue += '+';
        if (isPercentage) displayValue += '%';
        
        element.innerText = displayValue;
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => statsObserver.observe(stat));

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #1590ff 0%, #6366f1 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 999;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(21, 144, 255, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 8px 25px rgba(21, 144, 255, 0.4)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 5px 15px rgba(21, 144, 255, 0.3)';
});

// ===== Cursor Effect (Optional - for desktop) =====
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #1590ff;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: 0.1s;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
    
    // Expand cursor on hover over links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(21, 144, 255, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

// ===== Console Message =====
console.log('%c👋 Hola! Gracias por visitar mi portafolio', 'color: #1590ff; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Desarrollado con HTML, CSS y JavaScript', 'color: #6366f1; font-size: 14px;');
console.log('%c📧 Contáctame en: danztty@gmail.com', 'color: #00d4ff; font-size: 14px;');

// ===== Language Translation =====
const siteTranslations = {
    es: {
        'nav-home':           'Inicio',
        'nav-about':          'Sobre Mí',
        'nav-experience':     'Experiencia',
        'nav-skills':         'Habilidades',
        'nav-achievements':   'Logros',
        'nav-contact':        'Contacto',
        'hero-title':         'Hola, soy Daniel Bonalde',
        'hero-subtitle':      'Senior Full Stack Developer',
        'hero-description':   'Con más de 8 años de experiencia creando interfaces web de alto rendimiento usando JavaScript, TypeScript, Vue, React y Svelte. Node.js, Go y Java Spring Boot.',
        'hero-cta-primary':   'Contáctame',
        'hero-cta-secondary': 'Ver Experiencia',
        'nav-projects':       'Proyectos',
        'projects-title':     'Proyectos',
        'about-title':        'Sobre Mí',
        'experience-title':   'Experiencia Profesional',
        'skills-title':       'Habilidades Técnicas',
        'achievements-title': 'Logros Destacados',
        'education-title':    'Educación',
        'contact-title':      'Contáctame',
    },
    en: {
        'nav-home':           'Home',
        'nav-about':          'About',
        'nav-experience':     'Experience',
        'nav-skills':         'Skills',
        'nav-achievements':   'Achievements',
        'nav-contact':        'Contact',
        'hero-title':         "Hi, I'm Daniel Bonalde",
        'hero-subtitle':      'Senior Full Stack Developer',
        'hero-description':   'With over 8 years of experience building high-performance web apps using JavaScript, TypeScript, Vue, React, and Svelte. Node.js, Go, and Java Spring Boot.',
        'hero-cta-primary':   'Contact Me',
        'hero-cta-secondary': 'View Experience',
        'nav-projects':       'Projects',
        'projects-title':     'Projects',
        'about-title':        'About Me',
        'experience-title':   'Professional Experience',
        'skills-title':       'Technical Skills',
        'achievements-title': 'Notable Achievements',
        'education-title':    'Education',
        'contact-title':      'Contact Me',
    }
};

const translationTargets = {
    'nav-home':           'a[href="#home"].nav-link',
    'nav-about':          'a[href="#about"].nav-link',
    'nav-experience':     'a[href="#experience"].nav-link',
    'nav-skills':         'a[href="#skills"].nav-link',
    'nav-achievements':   'a[href="#achievements"].nav-link',
    'nav-contact':        'a[href="#contact"].nav-link',
    'hero-title':         '.hero-title',
    'hero-subtitle':      '.hero-subtitle',
    'hero-description':   '.hero-description',
    'hero-cta-primary':   'a[href="#contact"].btn-primary',
    'hero-cta-secondary': 'a[href="#experience"].btn-secondary',
    'nav-projects':       'a[href="#projects"].nav-link',
    'projects-title':     '#projects .section-title',
    'about-title':        '#about .section-title',
    'experience-title':   '#experience .section-title',
    'skills-title':       '#skills .section-title',
    'achievements-title': '#achievements .section-title',
    'education-title':    '#education .section-title',
    'contact-title':      '#contact .section-title',
};

let currentLang = localStorage.getItem('preferredLanguage') || 'es';

function translatePage(lang) {
    const t = siteTranslations[lang];
    Object.entries(translationTargets).forEach(([key, selector]) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    });
    currentLang = lang;
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) currentLangEl.textContent = lang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

// Language Toggle Button
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        translatePage(newLang);
    });
}

// Apply saved language on load (except hero title — handled by typing effect)
const currentLangEl = document.getElementById('currentLang');
if (currentLang === 'en') {
    const t = siteTranslations.en;
    Object.entries(translationTargets).forEach(([key, selector]) => {
        if (key === 'hero-title') return;
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    });
    if (currentLangEl) currentLangEl.textContent = 'ES';
    document.documentElement.lang = 'en';
} else {
    if (currentLangEl) currentLangEl.textContent = 'EN';
}


