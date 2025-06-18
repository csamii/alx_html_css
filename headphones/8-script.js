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