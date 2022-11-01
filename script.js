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

function copyClipboard(id){
    var Text = document.getElementById(id)
    navigator.clipboard.writeText(Text.ariaValueText);
}

function submit() {
    var count = 0
    var x = Array.from(document.getElementsByClassName("correct"))
    const r = document.getElementById("reset")
    const s = document.getElementById("submit");
    x.forEach(element => {
        if(element.checked)
            count++
    });
    document.getElementById("ered").innerHTML="Eredmény: "+count.toString()+"/3"
    r.style.display = "block";
    s.style.display = "none";
    } 


function reset() {
    const r = document.getElementById("reset");
    const s = document.getElementById("submit");
    document.getElementById("ered").innerHTML="";
    r.style.display = "none";
    s.style.display = "block";
    for (let i = 1; i < 10; i++) {
        try {
            document.querySelector(`input[name=select${i.toString()}]:checked`).checked = false;
        } catch (error) {
            //pass
        }
        
    }
    }