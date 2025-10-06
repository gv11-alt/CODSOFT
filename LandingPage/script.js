document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Simple validation check
        if (name && email && message) {
            // Show a success message
            alert(`Thank you, ${name}! Your message has been sent.`);
            
            // Clear the form fields
            contactForm.reset();
        } else {
            // Show an error message if fields are empty
            alert('Please fill out all fields before submitting.');
        }
    });
});