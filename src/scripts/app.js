const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show-anim')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden-anim-l, .hidden-anim-r');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const scrollDownBtn = document.getElementById("scroll-down-btn");
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  const content = document.getElementById("page-content");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.addEventListener("DOMContentLoaded", () => {
        const scrollDownBtn = document.getElementById("scroll-down-btn");
        const scrollTopBtn = document.getElementById("scroll-top-btn");
        const content = document.getElementById("page-content");

        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            scrollTopBtn?.classList.remove("opacity-0", "pointer-events-none");
          } else {
            scrollTopBtn?.classList.add("opacity-0", "pointer-events-none");
          }
        });

        scrollDownBtn?.addEventListener("click", () => {
          content.scrollIntoView({ behavior: "smooth" });
        });

        scrollTopBtn?.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
      scrollTopBtn?.classList.remove("opacity-0", "pointer-events-none");
    } else {
      scrollTopBtn?.classList.add("opacity-0", "pointer-events-none");
    }
  });

  scrollDownBtn?.addEventListener("click", () => {
    content.scrollIntoView({ behavior: "smooth" });
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

particlesJS.load('header-particles', '../assets/header_particles.json', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS.load('footer-particles', '../assets/footer_particles.json', function() {
  console.log('callback - particles.js config loaded');
});
