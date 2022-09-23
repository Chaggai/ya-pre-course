const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function main(arr) {
  const sum = arr.reduce((accumulator, value) => (
    value > 2 && value < 7 ? accumulator + value : accumulator), null
  );

  return `Sum of nambers between 3 to 6: ${sum}`;
};

const result = main(arr);
console.log(result);