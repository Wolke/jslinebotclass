const dialogflow = require("dialogflow");
const uuid = require("uuid");
const fetch = require("node-fetch");
let private_key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

// console.log(private_key);
// return;
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: private_key
  }
});
const sessionPath = sessionClient.sessionPath("demo123-odsk", uuid.v4());

//weather api
var getWeather = async (locationName) => {
  return await fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-5A8C36DD-0F86-4F52-9C86-8C19AA5674E6&format=JSON&locationName=${locationName}&elementName=`
  ).then((res) => res.json());
  // .then((json) => console.log(json));
  // return json;
};
// (async () => {
//   let r = await getWeather(encodeURI("新北市"));
//   console.log(r);
// })();
//dialogflow
//台北市的天氣如何,
//新北市的今天幾度

//gcp function

async function handle(text) {
  const sessionId = uuid.v4();

  // Create a new session
  // let s = process.env.GOOGLE_PRIVATE_KEY;

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: text, // 改成喂
        // The language used by the client (en-US)
        languageCode: "zh-TW" // 改成 zh-TW
      }
    }
  };
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  //intent
  // weather = >
  console.log("Detected intent");
  console.log(responses[0].queryResult.parameters);
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }

  let t = `不清楚`;
  if (result.intent.displayName === "Default Fallback Intent") {
    return t;
  }
  let { location } = responses[0].queryResult.parameters.fields;

  try {
    let r = await getWeather(encodeURI(location.stringValue));
    t = r.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    console.log(t);
  } catch (e) {
    console.log(e);
  }
  return `${location.stringValue}的天氣是 ${t}`;
}

module.exports = handle;
