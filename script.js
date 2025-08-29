// Smooth Scroll
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.getElementById(this.getAttribute('href').substring(1));
    window.scrollTo({top: target.offsetTop - 70, behavior:'smooth'});
  });
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const nextBtn = document.querySelector('.slider-controls .next');
const prevBtn = document.querySelector('.slider-controls .prev');

function showSlide(index){
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Fade-in Cards on Scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) card.style.opacity = 1;
  });
});
cards.forEach(card => card.style.opacity=0);
