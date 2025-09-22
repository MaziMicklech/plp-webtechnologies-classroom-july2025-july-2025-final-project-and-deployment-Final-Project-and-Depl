// Add event listener to cart buttons
const cartButtons = document.querySelectorAll('.product-card button');

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('✅ Product added to cart!');
  });
});

// Shop Now button
const shopNowButton = document.querySelector('.hero .btn');
if (shopNowButton) {
  shopNowButton.addEventListener('click', () => {
    window.location.href = "shop.html"; // redirect to shop
  });
}

// Contact form submission
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}