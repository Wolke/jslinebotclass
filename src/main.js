var ary = [`amy`, `peter`, `john`];
let r = ary.filter((v, i, a) => {
  // console.log(v, i, a);
  if (v.indexOf(`a`) === -1) {
    return v;
  }
});
console.log(r);

function handle(text) {
  return text;
}

module.exports = handle;
