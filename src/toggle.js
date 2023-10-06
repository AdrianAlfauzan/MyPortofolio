const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .navbar");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});