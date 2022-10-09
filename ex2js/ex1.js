const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const main = (arr) => {
  const sum = arr.reduce(
    (acc, cur) => (cur > 2 && cur < 7 ? acc + cur : acc),
    null
  );
  return `Sum of nambers between 3 to 6: ${sum}`;
};

const result = main(arr);
console.log(result);
