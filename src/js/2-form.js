const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// take and put data to local storage
form.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// take data from local storage and put to inputs
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  form.email.value = JSON.parse(savedData).email;
  form.message.value = JSON.parse(savedData).message;
}

// remove data from local storage and in ui after submit
form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  form.reset();
  formData.email = '';
  formData.message = '';
});

// set placeholder when focused
const inputField = document.querySelector('input');
const textareaField = document.querySelector('textarea');

inputField.addEventListener('focus', () => {
  inputField.placeholder = 'Your email';
});

inputField.addEventListener('blur', () => {
  inputField.placeholder = '';
});

textareaField.addEventListener('focus', () => {
  textareaField.placeholder = 'Your message';
});

textareaField.addEventListener('blur', () => {
  textareaField.placeholder = '';
});
