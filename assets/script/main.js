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

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.key === 65) {
		alert("The 'a' key is pressed.");
	}
}