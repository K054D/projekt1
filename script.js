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
    var copyText = "";
    const sinppets = [
        ["codesnippet-a",'string name = "Jhon";'],
        ["codesnippet-b",'int[] array = new int[n];'],
        ["codesnippet-c",'int[] array;\narray = new int[n];'],
        ["codesnippet-d",'int[] array = new int[5] { 1, 2, 3, 4, 5 };'],
        ["codesnippet-e",'int[] array = { 1, 2, 3, 4, 5 };'],
        ["codesnippet-f",'int[] array = { 1, 2, 3, 4, 5 };\nConsole.WriteLine(array[10]);'],
        ["codesnippet-g",'for (int i = 0; i < n; i++)\n{\n\t//ciklusmag\n}'],
        ["codesnippet-h",'int[] array = { 1, 2, 3, 4, 5 };\nreturn array.Length;'],
        ["codesnippet-i",'int[] array = { 1, 2, 3, 4, 5 };\nreturn array[2];']

    ]
    let i = 0    
    while (i<sinppets.length && sinppets[i][0]!=id) {
        i++
        console.log(sinppets[i])
    }
    copyText = sinppets[i][1]
    
    navigator.clipboard.writeText(copyText);
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