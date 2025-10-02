const menuBtn = document.querySelector(".nav__menu");
const navItems = document.querySelector(".nav__items");

menuBtn.addEventListener("click", () => {
  const isOpened = navItems.getAttribute("data-opened") === "true";
  navItems.setAttribute("data-opened", !isOpened);
  menuBtn.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", !isOpened);
});

// Video Play Control Logic
const videoWrapper = document.getElementById("e-commerce-video-wrapper");
const video = document.getElementById("e-commerce-video");
videoWrapper.addEventListener("mouseenter", () => {
  video.play();
});
videoWrapper.addEventListener("mouseleave", () => {
  video.pause();
});
