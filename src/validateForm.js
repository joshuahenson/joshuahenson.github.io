/* eslint no-param-reassign: 0 */

export const validateName = (name) => {
  const label = name.labels[0];
  if (name.value.length === 0) {
    name.style.boxShadow = '0 0 0 3px red';
    label.innerHTML = 'Name Required';
    label.style.color = 'red';
    return false;
  }
  name.style = null;
  label.style = null;
  label.innerHTML = 'Name';
  return true;
};

export const validateEmail = (email) => {
  // TODO add regex to check email
  const label = email.labels[0];
  if (email.value.length === 0) {
    email.style.boxShadow = '0 0 0 3px red';
    label.innerHTML = 'Email Required';
    label.style.color = 'red';
    return false;
  }
  email.style = null;
  label.style = null;
  label.innerHTML = 'Email';
  return true;
};

export const validateMessage = (message) => {
  const label = message.labels[0];
  if (message.value.length === 0) {
    message.style.boxShadow = '0 0 0 3px red';
    label.innerHTML = 'Message Required';
    label.style.color = 'red';
    return false;
  }
  message.style = null;
  label.style = null;
  label.innerHTML = 'Message';
  return true;
};

export default (name, email, message) => {
  let response = true;
  if (!validateName(name)) {
    response = false;
  }
  if (!validateEmail(email)) {
    response = false;
  }
  if (!validateMessage(message)) {
    response = false;
  }
  return response;
};
