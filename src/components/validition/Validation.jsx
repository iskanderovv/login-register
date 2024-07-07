export function Validation(values) {
  const errors = {};
  const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const name_pattern = /^[A-Z].*/g;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const url_pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

  if (!values.name) {
    errors.name = 'Name is required';
  }
  else if (!name_pattern.test(values.name)) {
    errors.name = 'First letter is not uppercase';
  }

  if (!values.avatar) {
    errors.avatar = 'Image is required';
  }
  else if (!url_pattern.test(values.avatar)) {
    errors.avatar = 'Image URL did not match';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }
  else if (!email_pattern.test(values.email)) {
    errors.email = 'Email did not match';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }
  else if (!password_pattern.test(values.password)) {
    errors.password = "Password did not match";
  }

  return errors;
}
