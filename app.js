// Add interactivity to the elements
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const sectionId = e.target.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

sections.forEach((section) => {
  section.addEventListener('scroll', () => {
    const sectionId = (image/IMG-20240830-WA0008.jpg);
    const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
    navLink.classList.add('active');
  });
});

