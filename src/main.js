/*
flow
交通 => imagemenu
好物 => [...]
好店 => [...]
好宿 => [...]
...
*/
let stores = require("./store")();
let contents = stores.map((s) => s.getResponse());
console.log(contents);
function handle(text) {
  // let r = text;
  switch (text) {
    case "好物":
      // r = "好物...";
      break;
    case "好店":
      // r = "好店...";
      break;
    case "好宿":
      // r = "好宿..";

      return {
        type: "flex",
        altText: "this is a flex message",
        contents: {
          type: "carousel",
          contents: contents
        }
      };
      // return stores.getResponse();
      break;
    case "交通":
      // r = "交通..";
      break;
    default:
      break;
  }
  return { type: "text", text };
}

module.exports = handle;
