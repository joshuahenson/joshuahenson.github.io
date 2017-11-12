import axios from 'axios';
import throttle from 'lodash.throttle';
import './smoothScroll';
import validateForm, { validateInput } from './validateForm';

const formSubmit = document.getElementById('formSubmit');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const formFields = document.querySelectorAll('.formField');
const tag = document.getElementById('tag');
const nav = document.getElementById('nav');
const ul = document.querySelector('.full nav ul');

const headerScroll = () => {
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

window.addEventListener('scroll', throttle(headerScroll, 100), false);

formFields.forEach((formField) => formField.addEventListener('blur', validateInput, false));

formSubmit.addEventListener('click', (e) => {
  // Not bothering to polyfill Promise for the edge cases.
  // Fall back to old school form submission as if no js.
  if (typeof Promise !== 'undefined') {
    e.preventDefault();
    if (validateForm(contactForm.name, contactForm.email, contactForm.message)) {
      formSubmit.innerHTML = 'Sending...';
      formStatus.innerHTML = null;
      formStatus.classList.remove('error');
      formSubmit.disabled = true;
      axios.post('https://www.enformed.io/rhc5j9n7',
        `Name=${encodeURIComponent(contactForm.name.value)}&Email=${encodeURIComponent(contactForm.email.value)}&Message=${encodeURIComponent(contactForm.message.value)}`
        , {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(() => {
          formSubmit.innerHTML = 'Send';
          formSubmit.disabled = false;
          formStatus.innerHTML = 'Thank you for contacting me!';
          contactForm.reset();
        })
        .catch(() => {
          formSubmit.innerHTML = 'Error';
          formStatus.innerHTML = 'It appears that something has gone terribly wrong. Please email me at error@joshuahenson.com';
        });
    } else {
      formStatus.classList.add('error');
      formStatus.innerHTML = 'Please correct the errors shown above.';
    }
  }
}, false);