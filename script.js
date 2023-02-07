let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-two-screen");
let image2 = document.querySelector(".Image2");
let image3 = document.querySelector(".Image3");
let image4 = document.querySelector(".Image4");
let image5 = document.querySelector(".Image5");
let image6 = document.querySelector(".Image6");
let image7 = document.querySelector(".Image7");
let image8 = document.querySelector(".Image8");
let image9 = document.querySelector(".Image9");
let scream = document.querySelector(".scream")
let hero = document.querySelector(".hero")
/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
console.log(image7)

optionOne.onclick = function() {
  storyOpening.style.display = "none";
  optionOneScreen.style.display = "block";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
  image2.style.display = "block";
}
optionTwo.onclick = function() {
  storyOpening.style.display = "none";
  optionTwoScreen.style.display = "block";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
  image9.style.display = "block";
};
image2.onclick = function() {
  image2.style.display = "none";
  image3.style.display = "block";
  scream.style.display = "block";

};
image9.onclick = function() {
  image9.style.display = "none";
  image4.style.display = "block";
};
image3.onclick = function() {
  console.log("Click")
  image3.style.display = "none";
  scream.style.display = "none";
  image5.style.display = "block";
};
image4.onclick = function() {
  image4.style.display = "none";
  image7.style.display = "block";
}








