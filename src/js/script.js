const menuBtn = document.querySelector(".nav__menu");
const navItems = document.querySelector(".nav__items");

menuBtn.addEventListener("click", () => {
  const isOpened = navItems.getAttribute("data-opened") === "true";
  navItems.setAttribute("data-opened", !isOpened);
  menuBtn.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", !isOpened);
});
