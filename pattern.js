const patterns = {
  firstname: {
    field: form['firstname'].value,
    pattern: /^[a-zA-Z]{2,12}$/,
    status: false
  },
  lastname: {
    field: form['lastname'].value,
    pattern: /^[a-zA-Z]{2,12}$/,
    status: false
  },
  username: {
    field: form['username'].value,
    pattern: /^[\w\-]{2,12}$/,
    status: false
  },
  email: {
    field: form['email'].value,
    pattern: /^[\w\.]{6,12}\@[a-z]{2,6}\.[a-z]{2,6}(\.[a-z]{2,6})?$/,
    status: false
  },
  password: {
    field: form['password'].value,
    pattern: /^[\w\-\@]{6,32}$/,
    status: false
  },
  telephone: {
    field: form['telephone'].value,
    pattern: /^[\d]{3}(\ |\-)[\d]{3}(\ |\-)[\d]{4}$/,
    status: false
  },
  bio: {
    field: form['bio'].value,
    pattern: /^[\w\-\ \.]{3,60}$/,
    status: false
  }
};

console.log(patterns.firstname.field);
