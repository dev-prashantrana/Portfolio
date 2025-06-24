// ⌨️ Typewriter Effect
const textArray = [
  "Prashant Rana",
  "a Web Developer",
  "a Software Developer",
  "a UI/UX Designer"
];
const typed = document.getElementById("typed-text");
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = textArray[index];
  const visibleText = current.slice(0, charIndex);
  typed.textContent = visibleText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 800);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ⬆️ Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✨ Scroll Reveal Animations
const animateSections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animateSections.forEach((section) => {
  section.classList.add("animate-hidden");
  observer.observe(section);
});
