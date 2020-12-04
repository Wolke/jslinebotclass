function handle(text) {
  let r = `白天好!`;
  let d = new Date();

  let s = d.toLocaleString(`zh-TW`, { timeZone: `Asia/Taipei`, hour12: false });
  console.log(s);
  let t = s.slice(11, 13);

  if (t > 5 && t < 11) {
    r = `早安!`;
  } else if (t >= 11 && t <= 16) {
    r = `午安!`;
  } else {
    r = `晚安!`;
  }
  return r;
}

module.exports = handle;
