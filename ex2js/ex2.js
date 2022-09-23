const arr = ["AragaafaaafdAkjhnakjha", "wwAAwwaw", "AAA"];

function main(arr) {
  [...arr] = arr.join('');
  arr = arr.filter(letter => letter === "A");
  return `Count of A's in array: ${arr.length}`;
}

const result = main(arr);
console.log(result);