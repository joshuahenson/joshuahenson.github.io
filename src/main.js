import './smoothScroll';
import axios from 'axios';
import validateForm, { validateName, validateEmail, validateMessage } from './validateForm';

const formSubmit = document.getElementById('formSubmit');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const tag = document.getElementById('tag');
const nav = document.getElementById('nav');
const ul = document.querySelector('.full nav ul');

const headerScroll = function () {
  const full = window.innerHeight;
  if (window.innerWidth >= 768) {
    if (window.pageYOffset < full * 0.40 && nav.className !== 'top') {
      nav.classList.add('top');
      tag.classList.add('show');
    } else if (window.pageYOffset > full * 0.40 && nav.className === 'top') {
      nav.classList.remove('top');
      tag.classList.remove('show');
    }
  }
};
headerScroll(); // Insure nav is shown when loading url with anchor

document.getElementById('mobileLink').addEventListener('click', () => {
  ul.classList.toggle('show');
}, false);

window.addEventListener('scroll', headerScroll, false);

contactForm.name.addEventListener('blur', () => {
  validateName(contactForm.name);
}, false);

contactForm.email.addEventListener('blur', () => {
  validateEmail(contactForm.email);
}, false);

contactForm.message.addEventListener('blur', () => {
  validateMessage(contactForm.message);
}, false);

formSubmit.addEventListener('click', (e) => {
  if (typeof Promise !== 'undefined') {
    // Not bothering to polyfill Promise for the edge cases.
    // Fall back to old school form submission as if no js.
    e.preventDefault();
    if (validateForm(contactForm.name, contactForm.email, contactForm.message)) {
      formSubmit.innerHTML = 'Sending...';
      formStatus.innerHTML = null;
      formSubmit.disabled = true;
      axios.post('/jsContact', {
        company: contactForm.company.value,
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
      })
      .then(() => {
        formSubmit.innerHTML = 'Message Sent';
        contactForm.reset();
      })
      .catch(() => {
        formSubmit.innerHTML = 'Fail';
        formStatus.innerHTML = 'It appears that something has gone terribly wrong. Please email me at error@joshuahenson.com'; // eslint-disable-line
      });
    } else {
      formStatus.innerHTML = 'Please correct the errors shown above.';
    }
  }
}, false);

if (module.hot) {
  module.hot.accept();
}
