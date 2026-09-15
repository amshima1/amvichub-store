/* =========================
   AMVICHUB JAVASCRIPT
========================= */


/* MOBILE MENU */

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");


menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

});


/* CLOSE MENU AFTER CLICKING A LINK */

const navLinks =
  document.querySelectorAll(".nav a");


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


/* CURRENT YEAR */

const year =
  document.getElementById("year");

year.textContent =
  new Date().getFullYear();
