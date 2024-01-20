

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling Up
    document.getElementById('scrollBox').style.display = 'block';
  } else {
    // Scrolling Down
    document.getElementById('scrollBox').style.display = 'none';

  }

  prevScrollPos = currentScrollPos;
};







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

