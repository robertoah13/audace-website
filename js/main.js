
// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');
navToggle?.addEventListener('click', () => {
  const expanded = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', expanded);
});
// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Added by ChatGPT enhancement
document.addEventListener("DOMContentLoaded", function(){
  const nav = document.querySelector("nav");
  if(!nav) return;
  let toggle = document.createElement("div");
  toggle.className = "menu-toggle";
  toggle.innerHTML = "☰";
  nav.insertBefore(toggle, nav.firstChild);
  toggle.addEventListener("click", ()=> nav.classList.toggle("active"));
});
