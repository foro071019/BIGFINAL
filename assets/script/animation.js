

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;


  if (prevScrollPos > currentScrollPos) {

    document.querySelector('.background_cirle').style.transform = 'translateX(0)';
    document.querySelector('.home_text_container').style.transform = 'translateX(0)';

  } else {
    // Scrolling Down

    document.querySelector('.background_cirle').style.transform = 'translateX(0)';
    document.querySelector('.home_text_container').style.transform = 'translateX(0)';
    document.querySelector('.scrolldown').style.visibility = 'hidden';

  }

  prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', left);

function left() {
  var reveals = document.querySelectorAll('.left');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', right);

function right() {
  var reveals = document.querySelectorAll('.right');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}



var mobileMenu = document.querySelector(".mobile_menu");

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    document.querySelector('header').style.transform = 'translateY(-100%)';
    document.getElementById('top_button').style.visibility = 'visible';
    document.getElementById('top_button').style.opacity = '1';
    // document.querySelector('header').style.position = 'fixed';


  } else {
    // Scrolling up
    document.querySelector('header').style.transform = 'translateY(0)';
    document.getElementById('top_button').style.visibility = 'hidden';
    document.getElementById('top_button').style.opacity = '0';

  }

  lastScrollTop = currentScrollTop;
});

