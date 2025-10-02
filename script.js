document.addEventListener("DOMContentLoaded", () => {
  const landingBlocks = document.querySelectorAll(".landing-block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // ukloni ako izađe iz viewa
      }
    });
  }, {
    threshold: 0.3
  });

  landingBlocks.forEach(block => observer.observe(block));
});