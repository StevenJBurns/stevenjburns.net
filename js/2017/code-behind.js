"use strict";

let blueish = "#002b72";
let redish = "#751e1e";
let greenish = "#20721d";
let orangey = "#c15d00";

console.log("Code-Behind loaded");

$("#button-profile").click(() => {
  $("#h1-color-value").text(`My Color Is : ${blueish}`);
  $("#main-content").animate({'background-color' : blueish, 'font-size' : '10px'}, 500);
  $(".fa").animate({"color" : blueish}, 250);
});

$("#button-skills").click(() => {
  $("#h1-color-value").text(`My Color Is : ${redish}`);
  $("#main-content").animate({'background-color' : redish, 'font-size' : '16px'}, 500);
  $(".fa").animate({"color" : redish}, 250);
});

$("#button-projects").click(() => {
  $("#h1-color-value").text(`My Color Is : ${greenish}`);
  $("#main-content").animate({'background-color' : greenish, 'font-size' : '24px'}, 500);
  $(".fa").animate({"color" : greenish}, 250);
});

$("#button-about").click(() => {
  $("#h1-color-value").text(`My Color Is : ${orangey}`);
  $("#main-content").animate({'background-color' : orangey, 'font-size' : '40px'}, 500);
  $(".fa").animate({"color" : orangey}, 250);
});