// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form Validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you! Your message has been sent.');
  this.reset(); // Clear the form after successful submission
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Back-to-Top Button (Optional)
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #f0a500;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  transition: background 0.3s;
`;

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
