import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const refs = {
  formEl: document.querySelector('form'),
  inputEl: document.querySelector('input'),
  textAreaEl: document.querySelector('textarea'),
};

refs.formEl.addEventListener('input', throttle(dataSave, 500));
window.addEventListener('load', dataInsert);
refs.formEl.addEventListener('submit', onSubmit);

let dataObj = {
  email: '',
  message: '',
};

function dataSave() {
  dataObj.email = refs.inputEl.value;
  dataObj.message = refs.textAreaEl.value;

  save(STORAGE_KEY, dataObj);
}

function dataInsert() {
  const savedData = load(STORAGE_KEY);
  if (savedData === undefined) {
    refs.inputEl.value = '';
    refs.textAreaEl.value = '';
    return;
  }
  refs.inputEl.value = savedData.email;
  refs.textAreaEl.value = savedData.message;
}

function onSubmit(e) {
  e.preventDefault();
  if (refs.inputEl.value === '' || refs.textAreaEl.value === '') {
    return alert('Please fill in all the fields!');
  }
  dataObj.email = refs.inputEl.value;
  dataObj.message = refs.textAreaEl.value;
  console.log(dataObj);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
