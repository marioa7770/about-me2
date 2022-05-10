"use strict";




// let username = prompt("What is your name?");
// alert("Hello " + username + "! we are going to play a game.");
// alert("I am going to ask you some questions about me");
// alert("You will answer with a yes or no");



// let answer = prompt("Do I Like Sports");
// if (answer.toLowerCase() === "yes") alert("Yes I like Sports!");
// else if (answer.toLowerCase() === "no") alert("Wrong Of Course I Like Sports!");
// // console.log(answer);

// let answer2 = prompt("Do I Love Insects?");
// if (answer2.toLowerCase() === "no") alert("You are correct I hate bugs!");
// else if (answer2.toLowerCase() === "yes") alert("That is not correct I dont like bugs!");
// // console.log(answer2);

// let answer3 = prompt("Is my favorite food steak?");
// if (answer3.toLowerCase() === "yes") alert("Yes you are correct I love steak!");
// else if (answer3.toLowerCase() === "no") alert("That is no not correct I love steaks!");
// // console.log(answer3);

// let answer4 = prompt("Am I am Aries?");
// if (answer4.toLowerCase() === "yes") alert("You are correct I am an aries");
// else if (answer4.toLowerCase() == "no") alert("That is not correct I am an aries");
// // console.log(answer4);

// let answer5 = prompt("Do I have children?");
// if (answer5.toLowerCase() === "yes") alert("you are correct I have 2 daughters");
// else if (answer5.toLowerCase() === "no")
//   alert("That is incorrect I have 2 daughters");
// // console.log(answer5);


var attemptsRemain = 4;
var correctAnswer = '42';
var answeredCorrectly = false;

while(attemptsRemain && !answeredCorrectly){
  var response = prompt(`You get ${attemptsRemain} attempts.How old am I?`);
  if (response === correctAnswer){
    alert('That is correct!');
    answeredCorrectly = true;
  }
  attemptsRemain--;
}


const sodaNames = ["DrPepper", "DietCoke", "CokeZero", "MrPibb", "DietPepsi"];
console.log(sodaNames);

const sodaNameGuess = prompt("What is the name of my favorite soda?");


for (let i = 0; i < sodaNames.length; i++) {
  const sodaName = sodaNames[i];
  console.log(i,sodaName);

  if (sodaNameGuess == sodaName) {
    alert("Yes," +  sodaNameGuess + " is my favorite soda!");
  }

}





