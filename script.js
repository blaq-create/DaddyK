
const menu = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const theme = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menu.innerHTML = '<i class="fas fa-bars"></i>';
  });
});


const themeBtn = document.getElementById("themeBtn");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);

  themeBtn.innerHTML = dark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  themeBtn.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
}

// Load saved preference
try {
  applyTheme(localStorage.getItem("portfolioTheme") === "dark");
} catch (e) {
  applyTheme(false);
}

// Toggle when clicked
themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);

  try {
    localStorage.setItem("portfolioTheme", dark ? "dark" : "light");
  } catch (e) {}
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();


