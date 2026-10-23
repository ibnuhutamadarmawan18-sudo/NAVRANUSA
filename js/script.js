// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika food-menu di klik
document.querySelector("#food-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const Food = document.querySelector("#food-menu");
document.addEventListener("click", function (e) {
  if (!Food.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
