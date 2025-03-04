// scripts.js
function openModal(type) {
    const modal = new bootstrap.Modal(document.getElementById('documentModal'));
    const modalImage = document.getElementById('modalImage');
    
    if(type === 'cv') {
        modalImage.src = 'cv-full.jpg';
    } else if(type === 'ldm') {
        modalImage.src = 'ldm-full.jpg';
    }
    
    modal.show();
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top <= 150 && rect.bottom >= 150) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
