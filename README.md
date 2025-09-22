# ROAR Pharmacy Online Store

Welcome to **ROAR Pharmacy Online Store** – your trusted platform for convenient, safe, and reliable access to pharmaceutical products and professional consultations, all from the comfort of your home.

## Features

- **Wide Range of Drugs:** Browse and order prescription and non-prescription medicines easily.
- **Online Consultations:** Get expert advice and consultations from qualified pharmacists.
- **Home Delivery:** Fast and secure delivery of your medicines right to your doorstep.
- **User-Friendly Interface:** Simple navigation for a seamless shopping experience.
- **Secure & Private:** Your health information and orders are handled with utmost confidentiality.

## How It Works

1. **Browse Products:** Explore our extensive catalog of medicines and healthcare products.
2. **Consult a Pharmacist:** Use our online consultation feature for expert guidance.
3. **Place Your Order:** Add items to your cart and checkout securely.
4. **Home Delivery:** Receive your order quickly and safely at your preferred address.


## Technologies Used
- Top-level:

- README.md
- html/ — site source (open html/index.html to preview).
 Inside html/:

- index.html, about.html, services.html, gallery.html, contact.html — main pages.

- css/style.css — primary stylesheet (layout and components).

- js/script.js — page scripts (counters, FAQ accordion, partners marquee, small UI logic).

- image/ — image assets used across the site (logos, hero, icons, photos).

- Header/footer: present in each page — change in every HTML file or adopt a templating workflow.

- Logo image: html/image/plogo.jpg — replace to update branding.

- Gallery: html/gallery.html (uses figure.gallery-card with captions).

- Quote form: index.html under .quote-section

## Key features
- Responsive layout with CSS Grid and Flexbox.
- Hero with call-to-action buttons.
- Services cards, steps, and animated counters.
- Quote form in a dedicated section.
- Partners marquee with continuous scrolling logos.
- Gallery cards with captions.

- Editing notes
- Header/footer: to change navigation or logo, update those blocks in each html/*.- html file or use a build step to include a shared header/footer.
- Logo filenames: avoid spaces (rename to logo.jpg) to simplify references.
- Gallery items: edit gallery.html, use figure.gallery-card and update <figcaption> for descriptions.

- Partners: update both .partners-track lists in index.html to keep marquee seamless.
## Scripts and behavior
- html/js/script.js includes:
  Counter animation (starts when counters enter viewport using  IntersectionObserver).

## Deployment
GitHub Pages: push to GitHub and configure Pages. Use the html/ folder as the site root if needed. link to website (https://roarpharmacy.netlify.app/)/
## Accessibility & responsiveness

- Images include alt attributes; update them to describe content.
- Test responsive behavior across devices; CSS includes responsive breakpoints.
---

**ROAR Pharmacy Online Store** – Making healthcare accessible, convenient, and reliable for everyone.