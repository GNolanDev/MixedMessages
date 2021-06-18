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

// given arrays of team names and quotes & an html element to output to, set innerHTML as the message string
const showNewMessage = (tList, cList, aList, outputElement) => {
  let outputString = "";
  let [team1, team2] = getNewTeams(tList);
  let commentatorMessage = getRandomMessage(cList);
  let afterMessage = getRandomMessage(aList);
  //console.log(team1, team2);
  outputString =
    `In the fantastic game of <strong>${team1}</strong> vs <strong>${team2}</strong>, the best quotes of the day were...<br>` +
    `From the in-game commentary: <blockquote>"${commentatorMessage}"</blockquote><br>` +
    `From after match interviews: <blockquote>"${afterMessage}"</blockquote>`;
  outputElement.innerHTML = outputString;
};

// given array of strings, select a random string & return it
const getRandomMessage = (msgArray) =>
  msgArray[Math.floor(Math.random() * msgArray.length)];

// get button and text output elements, & add event listener to enable button click function
let startButton, outputDiv;
window.onload = (event) => {
  // assignment happens here to ensure page has loaded before attempting to get elements
  startButton = document.getElementById("change-button");
  outputDiv = document.getElementById("output-text");
  //tests:
  //outputDiv.innerHTML = "output text test";
  //outputDiv.innerHTML = String(teamsList);
  //showNewMessage(teamsList, commentatorQuotes, afterQuotes, outputDiv);
  startButton.addEventListener("click", (ev) => {
    showNewMessage(teamsList, commentatorQuotes, afterQuotes, outputDiv);
  });
};
