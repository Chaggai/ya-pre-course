const miscSelect = document.querySelector('#miscSelect');
const inputTextToAdd = document.querySelector('#inputEextToAdd');
const addwordBtn = document.querySelector('#addWord');
const createTableBtn = document.querySelector('#createTable');

const textsToAddToTable = [];

addwordBtn.addEventListener('click', () => {
  if(!inputTextToAdd.value) return;
  let text = inputTextToAdd.value;
  addOptionText(text);
  textsToAddToTable.push(text);
  inputTextToAdd.value = '';
});

createTableBtn.addEventListener('click', () => {
  createTable(textsToAddToTable);
});

function addOptionText(text) {
  let option = document.createElement('option');
  option.value = text;
  option.innerText = text;
  miscSelect.appendChild(option);
  document.createElement('option').value = text;
  createTableBtn.removeAttribute('disabled');
}

function createTable(textToAdd) {
  clearTable();
  let table = document.createElement('table');
  table.setAttribute('border', '1');
  textToAdd.forEach(text => {
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.innerText = text;
    row.appendChild(cell);
    table.appendChild(row);
  });
  document.querySelector('body').appendChild(table);  
}

function clearTable() {
  document.querySelector('table') && document.querySelector('table').remove();
}