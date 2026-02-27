// Doraemon-Themed Portfolio JavaScript

// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const floatingGadgets = document.querySelectorAll('.gadget');
const progressBars = document.querySelectorAll('.skill-progress');
const resumeButton = document.getElementById('resume-download');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Animation for Navigation
window.addEventListener('scroll', () => {
    // Sticky Navigation
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 174, 239, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 174, 239, 0.1)';
    }

    // Active Navigation Link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Animate skill progress bars when in view
    animateProgressBars();
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Floating Animation Enhancement
function animateGadgets() {
    floatingGadgets.forEach((gadget, index) => {
        // Random floating animation
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        const randomRotate = Math.random() * 360;
        
        gadget.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        gadget.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Animate back to original position
        setTimeout(() => {
            gadget.style.transition = 'all 3s ease-in-out';
            gadget.style.transform = 'translate(0, 0) rotate(0deg)';
            gadget.style.opacity = '0.1';
        }, 1000);
    });
}

// Call animation every 5 seconds
setInterval(animateGadgets, 5000);

// Skill Progress Bar Animation
function animateProgressBars() {
    progressBars.forEach(progressBar => {
        const targetWidth = progressBar.getAttribute('data-width');
        const rect = progressBar.getBoundingClientRect();
        
        // Animate when in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const fill = progressBar.querySelector('.progress-fill');
            fill.style.width = targetWidth + '%';
        }
    });
}

// Resume Download Animation
resumeButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Visual feedback for resume download
    const button = e.target.closest('.resume-button');
    const sender = button.querySelector('.gadget-sender');
    const senderLight = button.querySelector('.sender-light');
    
    // Trigger animation
    sender.style.right = '10px';
    sender.style.background = 'rgba(255, 255, 255, 0.8)';
    senderLight.style.animation = 'none';
    senderLight.offsetHeight; // Trigger reflow
    senderLight.style.animation = 'pulse 1s infinite';
    
    // Simulate download
    setTimeout(() => {
        // Create a fake download link
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Rohit_Rao_Resume.pdf';
        link.click();
        
        // Reset animation
        setTimeout(() => {
            sender.style.right = '-20px';
            sender.style.background = 'rgba(255, 255, 255, 0.3)';
            senderLight.style.animation = 'pulse 2s infinite';
        }, 1000);
    }, 500);
});

// Skill Card Hover Animation Enhancement
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1) rotateY(5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0, 174, 239, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 15px rgba(0, 174, 239, 0.2)';
    });
});

// Project Card Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 174, 239, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 15px rgba(0, 174, 239, 0.2)';
    });
});

// Contact Form Animation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateX(5px)';
        input.parentElement.style.boxShadow = '0 5px 15px rgba(0, 174, 239, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'translateX(0)';
        input.parentElement.style.boxShadow = 'none';
    });
});

// Submit Button Animation with Send Effect
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('mouseenter', () => {
    submitBtn.style.transform = 'translateY(-5px) scale(1.05)';
    submitBtn.style.boxShadow = '0 10px 25px rgba(0, 174, 239, 0.5)';
});

submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.transform = 'translateY(0) scale(1)';
    submitBtn.style.boxShadow = '0 8px 25px rgba(0, 174, 239, 0.3)';
});

// Enhanced Form Submission with Send Animation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Visual feedback for form submission
    const sendAnimation = submitBtn.querySelector('.send-animation');
    const sendGadget = submitBtn.querySelector('.send-gadget');
    
    // Trigger send animation
    sendAnimation.style.opacity = '1';
    sendAnimation.style.right = '15px';
    sendGadget.style.animation = 'sendPulse 0.5s infinite';
    
    // Change button text and color
    submitBtn.style.background = '#4CAF50';
    submitBtn.innerHTML = '<i class="fas fa-check"></i><span>Message Sent!</span>';
    
    // Reset after 2 seconds
    setTimeout(() => {
        submitBtn.style.background = getComputedStyle(document.documentElement).getPropertyValue('--doraemon-blue') || '#00AEEF';
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span><div class="send-animation"><div class="send-gadget"></div></div>';
        
        // Reset animation
        setTimeout(() => {
            sendAnimation.style.opacity = '0';
            sendAnimation.style.right = '-30px';
        }, 500);
    }, 2000);
    
    // Log form data (in a real app, this would be sent to a server)
    console.log('Form submitted:', { name, email, message });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll reveal
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Additional sections to observe
const animatedElements = document.querySelectorAll('.about-card, .skill-card, .project-card, .cert-card, .strength-item');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Doraemon Avatar Animation Enhancement
const avatar = document.querySelector('.avatar-circle');
let isBouncing = true;

// Enhanced bounce animation
function enhancedBounce() {
    if (isBouncing) {
        avatar.style.animation = 'none';
        setTimeout(() => {
            avatar.style.animation = 'bounce 2s ease-in-out infinite';
        }, 10);
    }
}

// Trigger enhanced bounce on hover
avatar.addEventListener('mouseenter', () => {
    isBouncing = false;
    avatar.style.transform = 'scale(1.1) rotate(5deg)';
    avatar.style.boxShadow = '0 20px 40px rgba(0, 174, 239, 0.5)';
});

avatar.addEventListener('mouseleave', () => {
    isBouncing = true;
    enhancedBounce();
    avatar.style.transform = 'scale(1) rotate(0deg)';
    avatar.style.boxShadow = '0 8px 25px rgba(0, 174, 239, 0.3)';
});

// Window Load Animation
window.addEventListener('load', () => {
    // Animate hero section elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-stats, .cta-button');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animate floating gadgets
    setTimeout(() => {
        floatingGadgets.forEach((gadget, index) => {
            gadget.style.opacity = '0.1';
            gadget.style.transition = 'all 1s ease-out';
        });
    }, 1000);
    
    // Animate objective section
    setTimeout(() => {
        const objectiveCard = document.querySelector('.objective-card');
        if (objectiveCard) {
            objectiveCard.style.opacity = '0';
            objectiveCard.style.transform = 'translateY(30px)';
            objectiveCard.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                objectiveCard.style.opacity = '1';
                objectiveCard.style.transform = 'translateY(0)';
            }, 500);
        }
    }, 1500);
});

// Resize Event for Responsive Adjustments
window.addEventListener('resize', () => {
    // Adjust navigation for mobile/desktop
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on Escape
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Accessibility Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels
    navMenu.setAttribute('aria-label', 'Main Navigation');
    hamburger.setAttribute('aria-label', 'Toggle Navigation Menu');
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid var(--doraemon-light-blue)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
    
    // Add tooltips for better accessibility
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    skillPercentages.forEach(percentage => {
        percentage.setAttribute('title', `Skill level: ${percentage.textContent}`);
    });
});

// Career Objective Section Animation
const objectiveCard = document.querySelector('.objective-card');
if (objectiveCard) {
    objectiveCard.addEventListener('mouseenter', () => {
        const gadgetVisual = objectiveCard.querySelector('.gadget-visual');
        gadgetVisual.style.animationPlayState = 'paused';
    });
    
    objectiveCard.addEventListener('mouseleave', () => {
        const gadgetVisual = objectiveCard.querySelector('.gadget-visual');
        gadgetVisual.style.animationPlayState = 'running';
    });
}

console.log('🚀 Doraemon Portfolio loaded successfully! 🎯');
