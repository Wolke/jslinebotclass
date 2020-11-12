const EXCHANGE_RATE = 30;

// var agent = {
//   name: "Amy",
//   age: 28,
//   countExchange: (...money) => EXCHANGE_RATE * money
// };

// function Agent(name, age) {
//   this.name = name;
//   this.age = age;
//   this.countExchange = (...money) => EXCHANGE_RATE * money;
// }

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
    return this.name + `泡茶中`;
  }
}

let amy = new Agent("Amy", 28);
let peter = new Major("Peter", 50);

function handle(text) {
  // amy.countExchange = (...money) => EXCHANGE_RATE * money + 1;
  // peter.countExchange = null;
  return peter.drinkPot(text);
}

module.exports = handle;
