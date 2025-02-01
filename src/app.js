/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function getExcuse() {
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

    var who = Math.floor(Math.random() * getWho.length);
    var action = Math.floor(Math.random() * getAction.length);
    var what = Math.floor(Math.random() * getWhat.length);
    var when = Math.floor(Math.random() * getWhen.length);

    return (
      getWho[who] +
      " " +
      getAction[action] +
      " " +
      getWhat[what] +
      " " +
      getWhen[when]
    );
  }

  document.getElementById("excuse").innerHTML = getExcuse();
};
