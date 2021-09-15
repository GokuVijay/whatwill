const nav = document.getElementById("nav");
  let a = window.innerWidth;
  if (a < 992) {
    nav.classList.add("bg-light");
    nav.classList.add("navbar-light");
  } else {
    nav.classList.remove("bg-light");
    nav.classList.remove("navbar-light");
  }
window.addEventListener("scroll", () => {
  let y = scrollY;
  let h = window.innerWidth;
  if (h > 992) {
    if (y > 40) {
      nav.classList.add("bg-light");
      nav.classList.add("navbar-light");
    } else {
      nav.classList.remove("bg-light");
      nav.classList.remove("navbar-light");
    }
  }
});
