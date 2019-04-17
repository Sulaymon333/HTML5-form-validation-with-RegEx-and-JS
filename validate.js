/*=== GET DOM elements ===*/

const inputFields = document.querySelectorAll('input');
const form = document.querySelector('#form');

/*=== Event listeners ===*/
const arr = [];
inputFields.forEach(input => {
  input.addEventListener('input', e => {
    if (fieldsData[input.id].pattern.test(e.target.value)) {
      input.className = 'valid';
      // fieldsData[input.id].status = true;
      arr.push(input.id);
    } else {
      input.className = 'invalid';
      // fieldsData[input.id].status = false;
    }
    let uniqueArr = new Set(arr);
    console.log(Array.from(uniqueArr));

    if (Array.from(uniqueArr).length === inputFields.length) {
      form['submit-button'].disabled = false;
      form['submit-button'].style.backgroundColor = 'green';
    }
    e.preventDefault();
  });
});

form.addEventListener('submit', e => form.reset());
