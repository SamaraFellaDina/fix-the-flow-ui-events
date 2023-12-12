let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump');
}

// pop-up
let popUp = document.querySelector(".pop-up")

document.addEventListener("keydown", space, false);

function space(e) {
    if (e.key === " ") {

    popUp.classList.toggle("pop-up-show");
    e.preventDefault();

  }
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

let development = document.querySelector("a:nth-of-type(4)")

document.addEventListener("keydown", devent, false);

function devent(e) {
    if (e.key === "d") {

    development.classList.toggle("rotation");
  }
}

// animatie 5

let all = document.querySelectorAll("section a");

document.addEventListener("keyup", shiftEvent, false);

function shiftEvent(e) {
  if (e.keyCode === 16) {
    all.forEach(element => {
      element.classList.toggle("cold");
    });
  }
}

// Animatie 6

let sprint5 = document.querySelector("a:nth-of-type(5)");

sprint5.addEventListener("mouseover", mousehover, false);

  function mousehover(e) {
    sprint5.classList.toggle("skew")
  }


  // animatie 7
  let allAndMore = document.querySelectorAll("section a");

document.addEventListener("keyup", coldevent, false);

// function coldevent(e) {
//   allAndMore[e.keyCode] = true;
  
//   if (allAndMore[17] && allAndMore[16]);

//   allAndMore.forEach(e => {
//     e.classList.toggle("brrrrr");
//   });
// }

// // Log a message for testing
// console.log("skewing enzo");


function coldevent(e) {
  allAndMore[e.keyCode] = true;
  
  if (e.key === "c") {

  allAndMore.forEach(e => {
    e.classList.toggle("brrrrr");
  });
}}

// Log a message for testing
console.log("skewing enzo");


// animatie 8
let fix = document.querySelector("a:nth-of-type(6)")
let clickCount = 0;

fix.addEventListener("click", trioclick, false);

function trioclick(e) {
  clickCount++;

    if (clickCount === 3) {
      console.log("Mouse clicked on something...3!");
      fix.classList.toggle("unfixed");
      clickCount = 0;
    }
}

// animatie 9

let the = document.querySelector("a:nth-of-type(7)")
let rockTitle = document.querySelector(".rock")
let rockImg = document.querySelector(".the-rock")

document.addEventListener("keydown", devent, false);

function devent(e) {
    if (e.key === "r") {

    the.classList.toggle("section-rock");
    rockTitle.classList.toggle("rock-show");
    rockImg.classList.toggle("the-rock-show");


  }
}