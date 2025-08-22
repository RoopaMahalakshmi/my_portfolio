var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
document.addEventListener("DOMContentLoaded", () => {
  const eduList = document.querySelector('.edu-scroll');
  const container = document.querySelector('.edu-right');

  if (eduList && container) {
    container.addEventListener('mouseover', () => {
      eduList.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseout', () => {
      eduList.style.animationPlayState = 'running';
    });
  }
});
const topBtn = document.getElementById("backToTop");

window.onscroll = function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
function revealOnScrollWithEffect() {
  document.querySelectorAll(".fade-in, .zoom-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener('scroll', revealOnScrollWithEffect);
window.addEventListener('load', revealOnScrollWithEffect);


 

// Animate progress bars and radial bars on scroll

function onScrollAnimate() {
  const bars = document.querySelectorAll('.Technical-bars .bar');
  const radialBars = document.querySelectorAll('.radial-bars');

  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.classList.add('visible');
    }
  });

  radialBars.forEach(rBar => {
    const rect = rBar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      rBar.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('load', onScrollAnimate);
