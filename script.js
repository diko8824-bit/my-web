// Smooth scroll
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
