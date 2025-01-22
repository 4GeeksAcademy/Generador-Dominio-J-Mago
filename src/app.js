/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom =[".com"]

for (prop of pronoun){

  for (prop1 of adj){

    for (prop2 of noun){

      console.log(prop+prop1+prop2+dom)
    }

  }
 
}
  
  console.log("Hello Rigo from the console!");
};
