// script adds random football related comments to the text output of index.html
// test of runnability in node. NB: type 'node main.js' in bash
// console.log("Script is working!");

// get button and text output elements, & add event listener to enable button click function
let startButton, outputDiv;
window.onload = (event) => {
  // assignment happens here to ensure page has loaded before attempting to get elements
  startButton = document.getElementById("change-button");
  outputDiv = document.getElementById("output-text");
  // test this part:
  //outputDiv.innerHTML = "output text test";
  //outputDiv.innerHTML = String(teamsList);
};

// create first part of string: one team vs another, ensuring a team doesn't play itself
let team1 = teamsList[Math.floor(Math.random() * teamsList.length)];
let team2 = teamsList[Math.floor(Math.random() * teamsList.length)];
while (team2 === team1) {
  team2 = teamsList[Math.floor(Math.random() * teamsList.length)];
}
console.log(team1, team2);

// create remaining string by concatenating one random selection from each of the two quote stores

// output text to text box
