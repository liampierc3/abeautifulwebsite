// Minimal JavaScript for page navigation simulation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Update active nav state
                navLinks.forEach(l => l.classList.remove('current-page'));
                this.classList.add('current-page');
                
                // Smooth scroll to section
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = targetId ? document.getElementById(targetId) : document.body;
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}); 