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

module.exports = () => {
  let ary = [
    new Store("好咖啡民宿", "04-1111111"),
    new Store("壞咖啡民宿", "04-2222222"),
    new Store("正咖啡民宿", "04-3333333")
  ];
  return ary;
};
