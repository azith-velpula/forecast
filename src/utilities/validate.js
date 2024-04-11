export const validate = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPwdValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  if (!isEmailValid) return "email is not valid";
  if (!isPwdValid) return "password is not valid";
  return null;
};
