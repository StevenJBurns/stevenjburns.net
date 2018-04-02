"use strict";

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let divMain = document.getElementById("ul-alphabet-main");
let divSub = document.getElementById("ul-alphabet-sub");


for (let letter of alphabet) {
  let newAlphabetNode = document.createElement("li");
  let newAlphabetChild = document.createTextNode(letter);
  
  newAlphabetNode.classList.add("li-letter");
  newAlphabetNode.appendChild(newAlphabetChild);
  
  divMain.appendChild(newAlphabetNode);
}