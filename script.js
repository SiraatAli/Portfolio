// ===== Mobile nav (burger button) =====
(function () {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (!navToggle || !mainNav) return;

  const openMenu = () => {
    mainNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = mainNav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  };

  navToggle.addEventListener("click", toggleMenu);

  // Close the menu after tapping a nav link
  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside the open menu
  document.addEventListener("click", (event) => {
    const isOpen = mainNav.classList.contains("is-open");
    if (!isOpen) return;
    const clickedInsideNav = mainNav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle) closeMenu();
  });

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  // Close the mobile menu automatically if the viewport is resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();
