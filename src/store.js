// sheets
const { GoogleSpreadsheet } = require("google-spreadsheet");

const getStore = async (p) => {
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
  let ary = [];
  (await sheet.getRows()).map((i) => {
    console.log(i["店名"], i["好宿"]);
    if (i[p] === "v") {
      ary.push(new Store(i["店名"], i["電話"]));
    }
  });
  console.log(ary);
  return ary;

  // return a1.value;
};

class Store {
  constructor(name, tel) {
    console.log(name, tel);
    if (name === undefined || tel === undefined) {
      throw Error("no name or tel");
    }
    this.name = name;
    this.tel = tel;
  }
  getResponse() {
    return {
      type: "bubble",
      hero: {
        type: "image",
        url:
          "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
        action: {
          type: "uri",
          label: "Line",
          uri: "https://linecorp.com/"
        }
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: `${this.name}`,
            weight: "bold",
            size: "xl",
            contents: []
          },
          {
            type: "box",
            layout: "baseline",
            margin: "md",
            contents: [
              {
                type: "icon",
                url:
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                size: "sm"
              },
              {
                type: "icon",
                url:
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                size: "sm"
              },
              {
                type: "icon",
                url:
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                size: "sm"
              },
              {
                type: "icon",
                url:
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                size: "sm"
              },
              {
                type: "icon",
                url:
                  "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
                size: "sm"
              },
              {
                type: "text",
                text: "4.0",
                size: "sm",
                color: "#999999",
                flex: 0,
                margin: "md",
                contents: []
              }
            ]
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            margin: "lg",
            contents: [
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "Place",
                    size: "sm",
                    color: "#AAAAAA",
                    flex: 1,
                    contents: []
                  },
                  {
                    type: "text",
                    text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                    size: "sm",
                    color: "#666666",
                    flex: 5,
                    wrap: true,
                    contents: []
                  }
                ]
              },
              {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "text",
                    text: "Time",
                    size: "sm",
                    color: "#AAAAAA",
                    flex: 1,
                    contents: []
                  },
                  {
                    type: "text",
                    text: "10:00 - 23:00",
                    size: "sm",
                    color: "#666666",
                    flex: 5,
                    wrap: true,
                    contents: []
                  }
                ]
              }
            ]
          }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        flex: 0,
        spacing: "sm",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: `CALL ${this.tel}`,
              uri: "https://linecorp.com"
            },
            height: "sm",
            style: "link"
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "WEBSITE",
              uri: "https://linecorp.com"
            },
            height: "sm",
            style: "link"
          },
          {
            type: "spacer",
            size: "sm"
          }
        ]
      }
    };
  }
}
class VIP extends Store {
  getResponse() {
    return {};
  }
}
module.exports = async (p) => {
  let ary = [];
  ary = await getStore(p);
  return ary;
};
