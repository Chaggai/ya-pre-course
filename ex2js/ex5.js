const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

function main(arr) {
  let counter = 0;
  return arr.reduce((acc, curr) => {
    return acc + curr.reduce((acc, curr, j) => {
      counter += j;
      return acc + curr;
    });
  }, 0) / counter;
};

const result = main(arr);
console.log(result);