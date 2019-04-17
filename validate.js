/*=== GET DOM elements ===*/

const inputFields = document.querySelectorAll('input');
const form = document.querySelector('#form');

/*=== Event listeners ===*/
inputFields.forEach(input => {
  input.addEventListener('input', e => {
    console.log(e.target.value);
  });
});

const patterns = {
  firstname: {
    field: form['firstname'].value,
    status: false
  },
  lastname: {
    field: form['lastname'].value,
    status: false
  },
  username: {
    field: form['username'].value,
    status: false
  },
  email: {
    field: form['email'].value,
    status: false
  },
  password: {
    field: form['password'].value,
    status: false
  },
  telephone: {
    field: form['telephone'].value,
    status: false
  },
  bio: {
    field: form['bio'].value,
    status: false
  }
};

console.log(patterns.firstname.field);
