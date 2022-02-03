function parsePart(string) {
  let res = [];

  for (let str of string.split(',').map(str => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else {
      let split = str.split('-');
      let start = split[0] - '0';
      let end = split[1] - '0';
      for (let i = start; i <= end; i++) {
        res.push(i);
      }
    }
  }
  return res;
}

export default parsePart;
