/*=== GET DOM elements ===*/
const inputFields = document.querySelectorAll('input');
const form = document.querySelector('#form');

/*=== input patterns ===*/
const patterns = {
  firstname: { pattern: /^[a-zA-Z]{2,12}$/ },
  lastname: { pattern: /^[a-zA-Z]{2,12}$/ },
  username: { pattern: /^[\w\-]{2,12}$/ },
  email: { pattern: /^[\w\.]{6,12}\@[a-z]{2,6}\.[a-z]{2,6}(\.[a-z]{2,6})?$/ },
  password: { pattern: /^[\w-@]{6,32}$/ },
  telephone: { pattern: /^[\d]{3}(\ |\-)[\d]{3}(\ |\-)[\d]{4}$/ },
  bio: { pattern: /^[\w-\ \.]{3,60}$/ }
};

/*=== Event listeners ===*/
let arr = [];
inputFields.forEach(input => {
  input.addEventListener('input', e => {
    if (patterns[input.id].pattern.test(e.target.value)) {
      input.className = 'valid';
      arr.push(input.id);
    } else {
      input.className = 'invalid';
    }
    let uniqueArr = new Set(arr);
    arr = Array.from(uniqueArr);

    if (arr.length === inputFields.length) {
      form['submit-button'].disabled = false;
      form['submit-button'].style.color = 'white';
      form['submit-button'].style.backgroundColor = '#18e618';
    }
  });
});

form.addEventListener('submit', e => {
  form.reset();
  arr = [];
  form['submit-button'].disabled = true;
  form['submit-button'].style.color = '#6d6d6d';
  form['submit-button'].style.backgroundColor = 'transparent';
  inputFields.forEach(input => input.classList.remove('valid'));
  e.preventDefault();
});
