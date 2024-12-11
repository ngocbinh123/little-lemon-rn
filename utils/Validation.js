const validation = {
  name: (name) => {
    return name.trim().length > 0;
  },
  email: (email) => {
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regExp.test(email);
  },
};
export default validation;
