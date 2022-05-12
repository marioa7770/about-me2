"use strict";




// let username = prompt("What is your name?");
// alert("Hello " + username + "! we are going to play a game.");
// alert("I am going to ask you some questions about me");
// alert("You will answer with a yes or no");


// let answer = prompt("Do I Like Sports");

// function sports (answer){

// if (answer.toLowerCase() === "yes") alert("Yes I like Sports!");
// else if (answer.toLowerCase() === "no") alert("Wrong Of Course I Like Sports!");
// // console.log(answer);
// }
// sports(answer);


// let answer2 = prompt("Do I Love Insects?");

// function insects(answer2){
// if (answer2.toLowerCase() === "no") alert("You are correct I hate bugs!");
// else if (answer2.toLowerCase() === "yes") alert("That is not correct I dont like bugs!");
// // console.log(answer2);
// }
// insects(answer2);

// let answer3 = prompt("Is my favorite food steak?");

// function steak(answer3){
// if (answer3.toLowerCase() === "yes") alert("Yes you are correct I love steak!");
// else if (answer3.toLowerCase() === "no") alert("That is not correct I love steaks!");
// // console.log(answer3);
// }
// steak(answer3);

// let answer4 = prompt("Am I am Aries?");

// function aries(answer4){
// if (answer4.toLowerCase() === "yes") alert("You are correct I am an aries");
// else if (answer4.toLowerCase() == "no") alert("That is not correct I am an aries");
// // console.log(answer4);
// }
// aries(answer4);

// let answer5 = prompt("Do I have children?");

// function children(answer5){
// if (answer5.toLowerCase() === "yes") alert("you are correct I have 2 daughters");
// else if (answer5.toLowerCase() === "no")
//   alert("That is incorrect I have 2 daughters");
// // console.log(answer5);
// }
// children(answer5);


//question 6
function questionSix(){
  let numOfAttempts = 4;
  while (numOfAttempts > 0){
    let guess = prompt('What number am I thinking of?');
    let numberOfGuess = parseInt(guess);

    if (numberOfGuess === 42){
      console.log('correct',numberOfGuess);
      alert('You\'re right!');
      break;

    } else if (numberOfGuess > 42){
      console.log('too high',numberOfGuess);
      numOfAttempts--;
      alert('Too high, try again');

    }else if (numberOfGuess < 42){
      console.log('Too low',numberOfGuess);
      alert('Too low, try again');
      numOfAttempts--;
    }
  }
}
questionSix();

alert('The correct answer was 42');


function drinks (){
let sodasIlike = ["dr pepper", "dietcoke", "cokezero", "mrpibb", "dietpepsi"];
//console.log(sodaNames);
let attempts = 6;
let correctAnswer = false;
console.log ('try again');

while (attempts> 0 && !correctAnswer){
  let guesses = prompt('Guess My Favorite Soda');
  attempts--;
  for (let i=0; i < 6; i++){
    if (guesses === sodasIlike[i]){
      alert('correct');
      correctAnswer = true;
    }
  }
}
}
drinks();

alert('I like soda  ' + sodasIlike);







