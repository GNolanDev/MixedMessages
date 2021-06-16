// script adds random football related comments to the text output of index.html
// test of runnability in node. NB: type 'node main.js' in bash
// console.log("Script is working!");

// get button and text output elements, & add event listener to enable button click function
var startButton, outputDiv;
window.onload = (event) => {
  // assignment happens here to ensure page has loaded before attempting to get elements
  startButton = document.getElementById("change-button");
  outputDiv = document.getElementById("output-text");
  // test this part:
  //outputDiv.innerHTML = "output text test";
  outputDiv.innerHTML = String(teamsList);
};

// import js of all teams in competition, and separate quotes of commentators and managers - store in arrays

// test json fetching

// create first part of string: one team vs another, ensuring a team doesn't play itself

// create remaining string by concatenating one random selection from each of the two quote stores

// output text to text box
