let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Animatie 1
let Frontend = document.querySelector("a:nth-of-type(1)")

Frontend.addEventListener("click", function() {
Frontend.classList.toggle("active1");
}); 

// Animatie 2 

let design = document.querySelector("a:nth-of-type(2)")
let passion = document.querySelector(".passion")

design.addEventListener("click", function() {
  console.log("passion is my Graphic design😂🫡🤠")
passion.classList.toggle("passion-show");
}); 


// Animatie 3 

let and = document.querySelector("a:nth-of-type(3)")
let html = document.querySelector("html")

and.addEventListener("dblclick", doSomething, false);

function doSomething(e) {
    console.log("Mouse clicked on something...twice!");
    html.classList.toggle("gradient-background")
}

// animatie 4