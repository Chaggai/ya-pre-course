let arr = ['Avi', 23, [1, 2, ['A', 'B', ['Hello']]]];

function main(arr) {
  arr = flatAnArrayHelper(arr);
  const result = [...arr[arr.length - 1]].length;
  return `Length of inner word: ${result}`;
}

function flatAnArrayHelper(arr) {
  arr = arr.flat();
  if (!Array.isArray(arr[arr.length - 1])) {
    return arr;
  } else {
    return flatAnArrayHelper(arr);
  }
}

const result = main(arr);
console.log(result);