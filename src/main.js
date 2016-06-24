import './smoothScroll';
import axios from 'axios';
import validateForm, { validateName, validateEmail, validateMessage } from './validateForm';

const formSubmit = document.getElementById('formSubmit');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
var tag = document.getElementById('tag');
var nav = document.getElementById('nav');
var ul = document.querySelector('.full nav ul');
var imgs = document.querySelectorAll('img');
var i, full, resizeTimer;

var setSizes = function () {
  full = window.innerHeight;
  var imgHeight = String(window.innerHeight * 0.8);
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.maxHeight = imgHeight + 'px';
  }
  ul.classList.remove('show');// fix resize above breakpoint
};
setSizes();

var headerScroll = function () {
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

document.getElementById('mobileLink').addEventListener('click', function () {
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
}, false);

// Wait until resize is complete before adjusting sizes;
var reSize = function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    setSizes();
  }, 500);
};
window.addEventListener('resize', reSize);

if (module.hot) {
  module.hot.accept();
}
