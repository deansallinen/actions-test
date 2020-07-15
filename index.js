const core = require('@actions/core');
const github = require('@actions/github');
const scraper = require('table-scraper');

const {getSailingsArray} = require("./getSailingsArray.js");

const scrapeSailingSchedule = async () => {
  console.log('Starting scrape');
  const url = 'http://orca.bcferries.com:8080/cc/marqui/actualDepartures.asp'
  const sailingPage = await scraper.get(
    'http://orca.bcferries.com:8080/cc/marqui/actualDepartures.asp'
  );

  const sailings = getSailingsArray(sailingPage);

  return sailings;
};

const main = async () => {
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
  console.log('sailings', await sailings)
} catch (error) {
  core.setFailed(error.message);
}
}

main();
