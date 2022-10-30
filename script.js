const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("a")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function copyClipboard(){
    var Text = document.getElementById("codesnippet-a")
    navigator.clipboard.writeText(Text.ariaValueText);
}

//nav


    const nav = document.querySelector(".nav");
/*    let lastScrollY = window.scrollY;
    console.log(lastScrollY);
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
      console.log(lastScrollY);
    });
  */

nav.onscroll = function() {hideNav()};

function hideNav() {
    console.log("e")
}


window.addEventListener("scroll", () => {

    console.log("m")
})