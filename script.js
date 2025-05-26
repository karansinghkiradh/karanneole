// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const logoLink = document.querySelector('header .logo a');
  // Function to scroll to section smoothly by ID
  function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // Event for logo (home link)
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll('hero');
    // Remove active class from nav links since we're back to top
    navLinks.forEach(link => link.classList.remove('active'));
  });
  // Events for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Smooth scroll to target section
      const sectionId = link.getAttribute('href').substring(1);
      smoothScroll(sectionId);
      // Update active link styling
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});