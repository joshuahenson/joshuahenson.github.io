/* eslint no-param-reassign: 0 */

const nameLabel = document.querySelector('[for=name]');
const emailLabel = document.querySelector('[for=email]');
const messageLabel = document.querySelector('[for=message]');

export const validateName = (name) => {
  const label = nameLabel;
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
  const label = emailLabel;
  const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/ // eslint-disable-line
  if (email.value.length === 0) {
    email.style.boxShadow = '0 0 0 3px red';
    label.innerHTML = 'Email Required';
    label.style.color = 'red';
    return false;
  }
  if (!re.test(email.value)) {
    email.style.boxShadow = '0 0 0 3px red';
    label.innerHTML = 'Email format "user@example.com" required';
    label.style.color = 'red';
    return false;
  }
  email.style = null;
  label.style = null;
  label.innerHTML = 'Email';
  return true;
};

export const validateMessage = (message) => {
  const label = messageLabel;
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
