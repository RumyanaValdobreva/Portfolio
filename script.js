// Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Message when the contact form is filled
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();

    fetch('https://formspree.io/f/xzzpldeb', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('confirmationMessage').style.display = 'block';
            this.reset();
        } else {
            return response.json().then(error => {throw new Error(error.errors[0].message)});
        }
    })
    .catch(error => {
        alert('There was a problem with your submission: ' + error.message);
    });
};

// Toggling Navbar Visibility

const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

header.addEventListener('click', () => {
    navbar.classList.toggle('active');
});