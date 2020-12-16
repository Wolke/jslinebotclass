// number
//user = > number
const { GoogleSpreadsheet } = require("google-spreadsheet");
var getNumber = async () => {
  const doc = new GoogleSpreadsheet(
    "1KU0PsZ2udpWjwGy1aw8uajHzM1IGMHidcf26O88hJWA"
  );
  doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  });
  await doc.loadInfo();
  // console.log(doc.title);
  let sheet = doc.sheetsByIndex[0];
  await sheet.loadCells("A1:E10");
  let a1 = sheet.getCell(0, 0);
  console.log(a1.value);
  if (a1.value === null) {
    a1.value = Math.floor(Math.random() * 100) + 1;
    await sheet.saveUpdatedCells();
  }

  return a1.value;
};
// getNumber();

async function handle(text) {
  let ans = await getNumber();
  console.log(ans, text);
  if (text == ans) {
    return "correct";
  } else if (text > ans) {
    return "small";
  } else if (text < ans) {
    return "big";
  }

  return ans;
}

module.exports = handle;
