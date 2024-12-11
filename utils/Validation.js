const validation = {
  name: (name) => {
    return name.trim().length > 0;
  },
  email: (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  },
  password: (password) => {
    return password.length >= 6;
  },
};
export default validation;
