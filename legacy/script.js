// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Scroll Animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all major sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Stagger animation for skill tags
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, categoryIndex) => {
    const tags = category.querySelectorAll('.skill-tag');
    tags.forEach((tag, tagIndex) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll('.skill-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'translateY(0)';
                }, index * 50);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillCategories.forEach(category => {
    skillObserver.observe(category);
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(240, 147, 251, 0.05))';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--card-bg)';
    });
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Contact Form Handling with Web3Forms
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    // Set API key from config (not hard-coded)
    const accessKeyInput = document.getElementById('accessKey');
    if (accessKeyInput && typeof CONFIG !== 'undefined') {
        accessKeyInput.value = CONFIG.WEB3FORMS_ACCESS_KEY;
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        formStatus.style.display = 'block';
        formStatus.innerHTML = '';
        
        // Get form data
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (response.status === 200) {
                // Success
                formStatus.innerHTML = '<div style="color: var(--success-color); padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid var(--success-color);"><i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.</div>';
                contactForm.reset();
            } else {
                // Error
                formStatus.innerHTML = '<div style="color: #ef4444; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px; border: 1px solid #ef4444;"><i class="fas fa-exclamation-circle"></i> ' + (result.message || 'Something went wrong. Please try again.') + '</div>';
            }
        } catch (error) {
            formStatus.innerHTML = '<div style="color: #ef4444; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px; border: 1px solid #ef4444;"><i class="fas fa-exclamation-circle"></i> Network error. Please check your connection and try again.</div>';
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
    
    floatingIcons.forEach((icon, index) => {
        const speed = 0.1 + (index * 0.05);
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('').includes(konamiPattern.join(''))) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('Portfolio website loaded successfully! 🚀');
console.log('Designed and developed by Vivek Inturi');
