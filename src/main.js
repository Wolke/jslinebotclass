//guess numebr
// 1-100
//random 20
//user : 50
// 1-50
const { GoogleSpreadsheet } = require("google-spreadsheet");
var loadDb = async () => {
  const doc = new GoogleSpreadsheet(
    "1KU0PsZ2udpWjwGy1aw8uajHzM1IGMHidcf26O88hJWA"
  );
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  });
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  let sheet = doc.sheetsByIndex[0];
  return sheet;
};

var getNumber = async () => {
  let sheet = await loadDb();
  await sheet.loadCells("A1:E10");
  const a1 = sheet.getCell(0, 0);
  console.log(a1.value);
  return a1.value;
};
var setNumber = async (n) => {
  let sheet = await loadDb();
  await sheet.loadCells("A1:E10");
  const a1 = sheet.getCell(0, 0);

  a1.value = n;
  await sheet.saveUpdatedCells();
};
// getNumber();
async function handle(text) {
  let ans = await getNumber();
  if (!ans) {
    ans = Math.floor(Math.random() * 100);
    setNumber(ans);
  }
  console.log(ans, text, ans > text);
  let r = "";
  if (ans === text) {
    r = `c`;
  } else if (ans < text) {
    r = `s`;
  } else if (ans > text) {
    r = `b`;
  }
  //

  return r;
}

module.exports = handle;
