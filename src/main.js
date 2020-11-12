const EXCHANGE_RATE = 30;
class Agent {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  countExchange(money) {
    return EXCHANGE_RATE * money;
  }
  responseDate() {
    let today = new Date();
    let s = today.toLocaleString("zh-TW", {
      timezone: "Asia/Taipei"
    });
    let d = s.split("/");
    // d = d.push(1);
    // console.log(d, d.push(2));

    return `今天是${d[0]}月${d[1]}日`;
  }

  responseGetFundDate() {
    let today = new Date();
    console.log(today.getTime());
    let dt = today.getTime() + 24 * 60 * 60 * 1000 * 7;
    console.log(dt);
    let end = new Date(dt);
    return `${end.getMonth() + 1}月 ${end.getDate()} 日拿錢`;
  }
}

class Major extends Agent {
  drinkPot() {
    console.log(`泡茶中`);
    let n = this.name + "王";
    // n.replace("王", "林");
    // console.log(n.split("r"));

    return `${n} 泡茶中`;
  }
}

let amy = new Agent("Amy", 28, 49.8);
let peter = new Major("Peter", 50, 53.3);
// console.log(typeof amy);

function handle(text) {
  return amy.responseDate();
}

module.exports = handle;
