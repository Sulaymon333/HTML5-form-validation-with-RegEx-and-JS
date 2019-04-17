const fieldsData = {
  firstname: {
    field: form['firstname'].id,
    pattern: /^[a-zA-Z]{2,12}$/,
    status: false
  },

  lastname: {
    field: form['lastname'].id,
    pattern: /^[a-zA-Z]{2,12}$/,
    status: false
  },

  username: {
    field: form['username'].id,
    pattern: /^[\w\-]{2,12}$/,
    status: false
  },

  email: {
    field: form['email'].id,
    pattern: /^[\w\.]{6,12}\@[a-z]{2,6}\.[a-z]{2,6}(\.[a-z]{2,6})?$/,
    status: false
  },

  password: {
    field: form['password'].id,
    pattern: /^[\w-@]{6,32}$/,
    status: false
  },

  telephone: {
    field: form['telephone'].id,
    pattern: /^[\d]{3}(\ |\-)[\d]{3}(\ |\-)[\d]{4}$/,
    status: false
  },

  bio: {
    field: form['bio'].id,
    pattern: /^[\w-\ \.]{3,60}$/,
    status: false
  }
};
