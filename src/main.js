const EXCHANGE_RATE = 30;

class Agent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  countExchange(money) {
    return EXCHANGE_RATE * money;
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

let amy = new Agent("Amy", 28);
let peter = new Major("Peter", 50);
console.log(typeof amy);

function handle(text) {
  // amy.countExchange = (...money) => EXCHANGE_RATE * money + 1;
  // peter.countExchange = null;
  return peter.drinkPot(text);
}

module.exports = handle;
