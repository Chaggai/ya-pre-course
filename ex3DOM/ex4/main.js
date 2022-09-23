const btn = document.querySelector('button');
const boxes = document.querySelectorAll('td');
const numbersInput = document.querySelector('input');

numbersInput.addEventListener('keypress', e => {
  btn.click();
});

btn.addEventListener('click', () => {
  if(numbersInput.value < 1 || numbersInput.value > 4) return;
  boxes.forEach(box => {
    box.style.backgroundColor = '#fff';
  });
  boxes[numbersInput.value - 1].style.backgroundColor = 'red'
});