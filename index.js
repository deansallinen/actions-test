const core = require('@actions/core');
const github = require('@actions/github');
const { scrape } = require("./getSailingsArray.js");

const main = async () => {
try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // core.setOutput("time", time);
  console.log('Starting scrape');
  const sailings = scrape();
  const jsonObj = JSON.stringify(await sailings);
  console.log(jsonObj);
  return jsonObj
} catch (error) {
  core.setFailed(error.message);
}
}

main();
