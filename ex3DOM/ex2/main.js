const radios = document.querySelectorAll('input[type="radio"]');
const creditAndIdBox = document.querySelector('#creditAndIdBox');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    // solution 1
    radio.value === 'yes' ? 
      creditAndIdBox.style.display = 'block' 
      : creditAndIdBox.style.display = 'none';

    // solution 2
    // radio.value === 'yes' && (creditAndIdBox.style.display = 'block' )
    // radio.value === 'no' && (creditAndIdBox.style.display = 'none' )
  })
});