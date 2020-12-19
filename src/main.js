/*
flow
好物 => [...]
好店 => [...]
好宿 => [...]
交通 => imagemenu
...
*/

function handle(text) {
  let r = ``;
  switch (text) {
    case "好物":
      r = "好物...";
      break;
    case "好店":
      r = "好店...";
      break;
    case "好宿":
      r = "好宿..";
      break;
    case "交通":
      r = "交通..";
      break;
    default:
      break;
  }
  return r;
}

module.exports = handle;
