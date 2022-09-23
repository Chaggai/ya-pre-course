const boxes = document.querySelectorAll('input');
const button = document.querySelector('button');

button.addEventListener('click', () => swapText(boxes));

function swapText([textA, textB], tempText) {
  tempText = textA.value;
  textA.value = textB.value;
  textB.value = tempText;
}