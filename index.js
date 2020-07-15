const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch')
// const {getSailingsArray} = require("./getSailingsArray.js");

const scrapeSailingSchedule = async () => {
  console.log('\nScraping sailings schedule...');
    const url = 'http://orca.bcferries.com:8080/cc/marqui/actualDepartures.asp'
  let response = await fetch(url);
  if (response.ok){
    let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

  // const sailings = getSailingsArray(json);
const sailings = json

  // console.log(`Scraped ${sailings.length} routes`);
  return sailings;
};

try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  const sailings = scrapeSailingSchedule();
  console.log(sailings);
} catch (error) {
  core.setFailed(error.message);
}
