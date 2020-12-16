//交通
//好味
//好店
//好宿
//微旅行
//更多
// 腳本語法

async function handle(text) {
  switch (text) {
    case "交通":
      let imagemap = {};
      //https://developers.line.biz/en/reference/messaging-api/#imagemap-message
      break;
    case "好味":
      //https://developers.line.biz/en/reference/messaging-api/#imagemap-message

      break;
    default:
      break;
  }
  return {
    type: "flex",
    altText: "this is a flex message",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url:
              "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Action",
              uri: "https://linecorp.com"
            }
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            action: {
              type: "uri",
              label: "Action",
              uri: "https://linecorp.com"
            },
            contents: [
              {
                type: "text",
                text: "Brown's Burger",
                weight: "bold",
                size: "xl",
                contents: []
              },
              {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "icon",
                        url:
                          "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                      },
                      {
                        type: "text",
                        text: "$10.5",
                        weight: "bold",
                        margin: "sm",
                        contents: []
                      },
                      {
                        type: "text",
                        text: "400kcl",
                        size: "sm",
                        color: "#AAAAAA",
                        align: "end",
                        contents: []
                      }
                    ]
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "icon",
                        url:
                          "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                      },
                      {
                        type: "text",
                        text: "$15.5",
                        weight: "bold",
                        flex: 0,
                        margin: "sm",
                        contents: []
                      },
                      {
                        type: "text",
                        text: "550kcl",
                        size: "sm",
                        color: "#AAAAAA",
                        align: "end",
                        contents: []
                      }
                    ]
                  }
                ]
              },
              {
                type: "text",
                text: "Sauce, Onions, Pickles, Lettuce & Cheese",
                size: "xxs",
                color: "#AAAAAA",
                wrap: true,
                contents: []
              }
            ]
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "spacer",
                size: "xxl"
              },
              {
                type: "button",
                action: {
                  type: "uri",
                  label: "Add to Cart",
                  uri: "https://linecorp.com"
                },
                color: "#905C44",
                style: "primary"
              }
            ]
          }
        },
        {
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
                text: "Brown Cafe",
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
                  label: "CALL",
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
        }
      ]
    }
  };
}

module.exports = handle;
