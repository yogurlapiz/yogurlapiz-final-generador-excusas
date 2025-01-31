/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let getWho = ["The dog", "My grandma", "The mailman", "My bird"];
  let getAction = ["ate", "peed", "crushed", "broke"];
  let getWhat = ["my homework", "my phone", "the car", "my book"];
  let getWhen = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getExcuse() {
    return getWho.concat(
      Math.floor(Math.random(getAction, getWhat, getWhen, "."))
    );
  }

  document.getElementById("excuse").innerHTML = getExcuse();
};
