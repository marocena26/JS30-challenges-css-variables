"use strict";

//-------------------CONST-------------------

const inputSpacing = document.getElementById("spacing");
const inputBlur = document.getElementById("blur");
const inputColor = document.getElementById("color");
const img = document.querySelector("img");
const span = document.querySelector(".title-color");
//-------------------FUNCTIONS-------------------

function spacingHandler(ev) {
  const spacingValue = ev.target.value;
  img.style.setProperty("padding", `${spacingValue}` + "px");
}

function blurHandler(ev) {
  const blurValue = ev.target.value;
  img.style.setProperty("filter", `blur(${blurValue}` + "px)");
}

function colorHandler(ev) {
  const colorValue = ev.target.value;
  img.style.setProperty("background", `${colorValue}`);
  span.style.setProperty("color", `${colorValue}`);
}

//-------------------EVENTS-------------------
inputSpacing.addEventListener("mousemove", spacingHandler);
inputBlur.addEventListener("mousemove", blurHandler);
inputColor.addEventListener("change", colorHandler);
