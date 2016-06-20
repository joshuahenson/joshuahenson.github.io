import './smoothScroll';

const formSubmit = document.getElementById('formSubmit');
const contactForm = document.getElementById('contactForm');
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

formSubmit.addEventListener('click', () => {
  contactForm.classList.add('submit');
}, false);

// Wait until resize is complete before adjusting sizes;
var reSize = function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    setSizes();
  }, 500);
};
window.addEventListener('resize', reSize);