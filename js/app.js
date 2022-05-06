"use strict";

let username = prompt("What is your name?");
alert("Hello " + username + "! we are going to play a game.");
alert("I am going to ask you some questions about me");
alert("You will tell me if they are true or false");



let answer = prompt("Do I Like Sports");
if (answer.toLowerCase() === "yes") alert("Yes I like Sports!");
else if (answer.toLowerCase() === "no") alert("Wrong Of Course I Like Sports!");
// console.log(answer);

let answer2 = prompt("Do I Love Insects?");
if (answer2.toLowerCase() === "no") alert("You are correct I hate bugs!");
else if (answer2.toLowerCase() === "yes") alert("No way bugs are gross!");
// console.log(answer2);

let answer3 = prompt("Is my favorite food steak?");
if (answer3.toLowerCase() === "yes") alert("Yes you are correct I love steak!");
else if (answer3.toLowerCase() === "no") alert("Everyone loves steak!");
// console.log(answer3);

let answer4 = prompt("Am I a scorpio?");
if (answer4.toLowerCase() === "no") alert("You are correct I am not a scorpio");
else if (answer4.toLowerCase() == "yes") alert("I am not a scorpio");
// console.log(answer4);

let answer5 = prompt("Do I have children?");
if (answer5.toLowerCase() === "yes") alert("yes I have 2 daughters");
else if (answer5.toLowerCase() === "no")
  alert("That is incorrect I have 2 daughters");
// console.log(answer5);

let goodbye = alert("Goodbye Mario Thanks For Playing!")
