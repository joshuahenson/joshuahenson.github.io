export const validateInput = (e) => {
  const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/ // eslint-disable-line
  const formElement = e.target || e;
  const { name } = formElement;
  const label = document.querySelector(`[for=${name}]`);
  if (formElement.value.length === 0) {
    label.innerHTML = `${name} Required`;
    formElement.parentElement.classList.add('error');
    return false;
  }
  if (name === 'Email' && !re.test(formElement.value)) {
    label.innerHTML = 'Email format "user@example.com" required';
    formElement.parentElement.classList.add('error');
    return false;
  }
  formElement.parentElement.classList.remove('error');
  label.innerHTML = name;
  return true;
};

export default (name, email, message) => {
  let response = true;
  if (!validateInput(name)) {
    response = false;
  }
  if (!validateInput(email)) {
    response = false;
  }
  if (!validateInput(message)) {
    response = false;
  }
  return response;
};
