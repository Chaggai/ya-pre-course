const arr = ["AragaafaaafdAkjhnakjha", "wwAAwwaw", "AAA"];

const main = (arr) => {
  [...arr] = arr.join('');
  arr = arr.filter(letter => letter === "A");
  return `Count of A's in array: ${arr.length}`;
}

const result = main(arr);
console.log(result);