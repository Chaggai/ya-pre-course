const add = (a, b) => a + b;

const mul = (a, b) => {
  let sum = a;
  for (let i = 1; i < b; i++) {
    sum = add(sum, a);
  }
  return `Multiply of ${a} and ${b}: ${sum}`;
}

const result = mul(5,5);
console.log(result);