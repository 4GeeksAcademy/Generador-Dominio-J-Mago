/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {


  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  
  let dom =[".com", ".net", ".ve", ".gov", ".uy"]
  
  for (let element1 of pronoun){
  
    for (let element2 of adj){
  
      for (let element3 of noun){
  
        console.log(element1 + element2 + element3 + dom [generarNumeroAleatorio(0,5)])
      }
  
    }1
   
  }
  
  function generarNumeroAleatorio(min, max){
  
    return Math.floor(Math.random()*(max-min))
  
  }
  
  
  console.log("Hello Rigo from the console!");
};
