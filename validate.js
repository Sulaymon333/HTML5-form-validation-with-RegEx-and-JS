/*=== GET DOM elements ===*/

const inputFields = document.querySelectorAll('input');
const form = document.querySelector('#form');

/*=== Event listeners ===*/
inputFields.forEach(input => {
  input.addEventListener('input', e => {
    // console.log(input.id);
    if (patterns[input.id].pattern.test(e.target.value)) {
      //console.log(true);
      input.className = 'valid';
      console.log(patterns[input.id].status);
      patterns[input.id].status = true;
    } else {
      input.className = 'invalid';
      console.log(patterns[input.id].status);
      patterns[input.id].status = false;
    }
    e.preventDefault();
    // form.reset();
  });
});
