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
// Countdown to event
// ===========================
function updateCountdown() {
  const eventDate = new Date("2026-05-16T13:00:00+09:00");
  const now = new Date();
  const diff = eventDate - now;
  const el = document.getElementById("countdown");
  if (!el) return;

  if (diff <= 0) {
    el.innerHTML = "// EVENT IN PROGRESS";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  el.innerHTML =
    `<span class="countdown-num">${days}</span><span class="countdown-label">days</span>` +
    `<span class="countdown-num">${String(hours).padStart(2, "0")}</span><span class="countdown-label">hrs</span>` +
    `<span class="countdown-num">${String(mins).padStart(2, "0")}</span><span class="countdown-label">min</span>` +
    `<span class="countdown-num">${String(secs).padStart(2, "0")}</span><span class="countdown-label">sec</span>`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

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
// Participant card room reveal
// ===========================
document.querySelectorAll(".participant-card[data-room]").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("show-room");
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
