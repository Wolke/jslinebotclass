var ary = [`amy`, `peter`, `john`];

let r = ary.reduce((p, v, i, a) => {
  console.log(p, v, i, a);
  // return v;
  if (p.indexOf(`a`) > -1) {
    return p;
  }
  if (v.indexOf(`a`) > -1) {
    return v;
  }
});
// console.log(r);

// let r = [];
for (let i = 0, j = 0; i < ary.length; i++) {
  if (ary[i].indexOf(`a`) > -1) {
    r.push(ary[j]);
  }
}

function handle(text) {
  return text;
}

module.exports = handle;
