document.addEventListener("DOMContentLoaded", () => {
  const eduItems = document.querySelectorAll(".edu-scroll li");

  function revealOnScroll() {
    eduItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();
});
