// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("expanded");
  document.body.style.overflow = mainNav.classList.contains("expanded")
    ? "hidden"
    : "auto";
});

overlay.addEventListener("click", function () {
  mainNav.classList.remove("expanded");
  document.body.style.overflow = "auto";
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Service Box Animation
const serviceBox = document.querySelector(".services-box");
if (serviceBox) {
  serviceBox.addEventListener("mousemove", (e) => {
    const x = e.pageX - serviceBox.offsetLeft;
    const y = e.pageY - serviceBox.offsetTop;

    serviceBox.style.setProperty("--x", `${x}px`);
    serviceBox.style.setProperty("--y", `${y}px`);
  });
}
