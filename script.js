  const textArray = [
    "Prashant Rana",
    "a Web Developer",
    "a Software Developer"
  ];

  const typed = document.getElementById("typed");
  let index = 0, charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = textArray[index];
    const visibleText = currentText.substring(0, charIndex);

    typed.textContent = visibleText;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      index = !isDeleting ? (index + 1) % textArray.length : index;
      setTimeout(typeEffect, 1000);
    }
  }

  // Start typing effect on page load
  document.addEventListener("DOMContentLoaded", typeEffect);