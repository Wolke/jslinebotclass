// string trigger
// 景點
// 好店
// 住宿
class Spot {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAdress() {
    return this.address;
  }
  getDesc() {
    return `名稱：${this.name} 地址： ${this.address}`;
  }
}

class Store extends Spot {
  constructor(name, address, product) {
    super(name, address);
    if (product === undefined) {
      throw Error(`no product`);
    }
    this.product = product;
  }
  getProdcut() {
    return `商品：${this.product}`;
  }
}

class Hotel extends Spot {
  constructor(name, address, price) {
    super(name, address);
    this.price = price;
  }
}

let park = new Spot(`大家公園`, `路邊`);
let cafe = new Store(`馬利歐莎`, `咖啡路`, `咖啡`);
let hotel = new Hotel(`厚德`, `厚德街`);
function handle(text) {
  let r;
  let s;
  switch (text) {
    case `景點`:
      s = `景點 ${park.getDesc()}`;
      r = [
        { type: "sticker", stickerId: "1", packageId: "1" },
        { type: "text", text: s }
      ];
      break;
    case `好店`:
      s = `好店 ${cafe.getDesc()} ${cafe.getProdcut()}`;
      r = { type: "text", text: s };
      break;

    case `住宿`:
      s = `住宿 ${hotel.getDesc()}`;
      r = { type: "text", text: s };
      break;
    default:
      s = `重新輸入一次`;
      r = { type: "text", text: s };
  }
  console.log(r);

  return r;
}

module.exports = handle;
