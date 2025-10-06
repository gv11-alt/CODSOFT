// Theme Toggle
let toggleTheme = document.querySelector("#toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Typing effect
let typingEffect = new Typed("#text", {
  strings: ["I am Gourav", "I am Coder", "I am Learner"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000
});
// Select all nav links
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");

// ✅ 1. Active nav on click
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active")); // remove from all
    this.classList.add("active"); // add to clicked one
  });
});

// ✅ 2. Active nav on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust offset for better accuracy
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
