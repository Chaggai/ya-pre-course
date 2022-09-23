const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

function main(arr) {
  arr = arr.flat();
  arr = arr.reduce((acc, curr) => {
    return acc += curr;
  });
  return `The total sum of inner numbers: ${arr}`;
}

const result = main(arr);
console.log(result);