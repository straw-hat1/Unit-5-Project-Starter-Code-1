let buttonone= document.querySelector(".button-one");
let outputone= document.querySelector(".outputone")
console.log(buttonone)
let oneInput= document.querySelector(".input")
buttonone.onclick=function (){
 let oneInput = document.querySelector(".one")
 
if (oneInput.value==="close and medium range")
   outputone.innerHTML="answer the next question";
else if (oneInput.value==="long range")
   outputone.innerHTML="answer the next question";
  
}
let outputtwo= document.querySelector(".outputtwo");
let buttontwo= document.querySelector(".button-two");
let twoInput= document.querySelector(".input")
buttontwo.onclick=function (){
  console.log("sss")
 let twoInput = document.querySelector(".two")
  let oneInput = document.querySelector(".one")
  if (oneInput.value === "close and medium range" && twoInput.value === "see through walls") 
    outputtwo.innerHTML="bloodhound";
  else if (oneInput.value === "long range" && twoInput.value === "see through walls") 
    outputtwo.innerHTML="seer";
  else if (oneInput.value === "long range" && twoInput.value === "heal and/or revive teammates") 
    outputtwo.innerHTML="lifeline";
  else if(oneInput.value === "close and medium range" && twoInput.value === "heal and/or revive teammates") 
    outputtwo.innerHTML="gibraltar";
}

