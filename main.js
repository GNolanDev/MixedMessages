// script adds random football related comments to the text output of index.html
// test of runnability in node. NB: type 'node main.js' in bash
// console.log("Script is working!");

// given an array of teams, return two teams, ensuring they aren't the same
const getNewTeams = (tList) => {
  t1 = tList[Math.floor(Math.random() * tList.length)];
  t2 = tList[Math.floor(Math.random() * tList.length)];
  while (t2 === t1) {
    t2 = tList[Math.floor(Math.random() * tList.length)];
  }
  return [t1, t2];
};

// given an array of team names & an html element to output to, set innerHTML as the message string
const showNewMessage = (tList, outputElement) => {
  let outputString = "";
  let [team1, team2] = getNewTeams(tList);
  //console.log(team1, team2);
  outputString = `In the fantastic game of ${team1} vs ${team2}, the best quotes of the day were...<br>`;
  outputElement.innerHTML = outputString;
};

// get button and text output elements, & add event listener to enable button click function
let startButton, outputDiv;
window.onload = (event) => {
  // assignment happens here to ensure page has loaded before attempting to get elements
  startButton = document.getElementById("change-button");
  outputDiv = document.getElementById("output-text");
  // test this part:
  //outputDiv.innerHTML = "output text test";
  //outputDiv.innerHTML = String(teamsList);
  showNewMessage(teamsList, outputDiv);
};



// create remaining string by concatenating one random selection from each of the two quote stores

// output text to text box
