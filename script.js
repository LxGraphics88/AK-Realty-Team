document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scrolling for Navigation ---
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset by header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Contact Form Simulation ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the default form submission

            // Clear previous message
            formMessage.classList.add('hidden');
            formMessage.style.color = 'var(--color-primary)';
            
            // Simulate API delay/success
            formMessage.textContent = 'Sending...';
            formMessage.classList.remove('hidden');

            setTimeout(() => {
                // Success message
                formMessage.textContent = 'Thank you! Your inquiry has been received. We will contact you shortly.';
                formMessage.style.color = 'green';
                
                // Clear the form fields
                contactForm.reset();
                
            }, 1500); // 1.5 second delay
        });
    }

});