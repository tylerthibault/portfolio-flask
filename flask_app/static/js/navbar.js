
// get the navbar element
const navbar = document.getElementById('navbar');

// get the offset position of the navbar
const navbarOffset = navbar.offsetTop;

// function to check if navbar has reached the top of the screen
function checkNavbarPosition() {
  if (window.pageYOffset >= navbarOffset) {
    // navbar has reached the top of the screen
    navbar.classList.remove("px-5", "rounded-2xl", "m-3")
} else {
    // navbar is not at the top of the screen
    navbar.classList.add("px-5", "rounded-2xl", "m-3")
    window.scrollTo(0, 0);
  }
}

// add event listener to check navbar position on scroll
window.addEventListener('scroll', checkNavbarPosition);
