const EXCHANGE_RATE = 30;

var countExchange = (...money) => EXCHANGE_RATE * money;

function handle(text) {
  return countExchange(text);
}

module.exports = handle;
