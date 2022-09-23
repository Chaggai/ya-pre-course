const myDiv = document.querySelector('.colorChanging');
const counterDisplay = document.querySelector('.counter');

let counter = 0;

myDiv.addEventListener('mouseenter', (e) => {
  counter++;
  let myStyle = e.target.style;
  myStyle.backgroundColor = myStyle.backgroundColor === 'blue' ? 'red' : 'blue';
  counterDisplay.innerHTML = counter;
})