// ===========================
// AOS (Scroll Animation) Init
// ===========================
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
});

// ===========================
// Navbar scroll effect
// ===========================
const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===========================
// Smooth scroll for nav links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    // Close mobile nav after click
    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

// ===========================
// Active nav link on scroll
// ===========================
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});
