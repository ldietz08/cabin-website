const navToggle = document.querySelector(".toggle-button");
const links = document.querySelector(".navbar-links");

navToggle.addEventListener('click', () => {
    links.classList.toggle("navabar-links");
})
