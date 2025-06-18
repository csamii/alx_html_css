// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.nav-links');

//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
//   });
// });

const bars = document.getElementById("bars");
const times = document.getElementById("times");
const navLinks = document.getElementById("nav-link");

bars.addEventListener("click", () => {
    times.style.display = "block";
    bars.style.display = "none";
    navLinks.style.display = "block";
})

times.addEventListener("click", () => {
    times.style.display = "none";
    bars.style.display = "block";
    navLinks.style.display = "none";
})