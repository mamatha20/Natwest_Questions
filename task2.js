const Num = [1, 2, 3, 4, 5];
const Mult = Num.map(function MultIdx(num, val) {
  return num*val;
})
console.log(Mult);