document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  var burgerContainer = document.getElementById("burger_container_js");
  var burger1 = document.getElementById("burger_menu_js");
  var burger2 = document.getElementById("burger_menu1_js");
  var mobileMenu = document.getElementById("mobile_menu_js");
  var barx1 = document.getElementById("bar-x1_js");
  var barx2 = document.getElementById("bar-x2_js");

  burgerContainer.addEventListener("click", function () {

    burger1.classList.toggle("js_hidden");
    burger2.classList.toggle("js_visible");
    burgerContainer.classList.toggle("js_burger_container");
    mobileMenu.classList.toggle("js_mobile_menu");
    barx1.classList.toggle("js_bar-x1");
    barx2.classList.toggle("js_bar-x2");
  });




  var sec_home = document.getElementById("home");
  var sec_about = document.getElementById("about");
  var sec_resume = document.getElementById("resume");
  var sec_contact_page = document.getElementById("contact_page");
  var sec_background_ed = document.getElementById("background_ed");
  var footer = document.getElementById("footer");
  var header = document.getElementById("header");
  var maintag = document.getElementById("maintag");

  var this_header_home = document.getElementById("header_home");
  var this_header_about = document.getElementById("header_about");
  var this_header_resume = document.getElementById("header_resume");
  var this_header_contact = document.getElementById("header_contact");
  var this_header_project = document.getElementById("header_project");
  var this_header_ed = document.getElementById("header_ed");


  var this_homebtn_about = document.getElementById("homebtn_about");
  var this_homebtn_resume = document.getElementById("homebtn_resume");
  var this_homebtn_contact = document.getElementById("homebtn_contact");
  var this_homebtn_project = document.getElementById("homebtn_project");
  var this_homebtn_ed = document.getElementById("homebtn_ed");

  var this_mobile_about = document.getElementById("mobile_about");
  var this_mobile_resume = document.getElementById("mobile_resume");
  var this_mobile_home = document.getElementById("mobile_home");
  var this_mobile_contact = document.getElementById("mobile_contact");
  var this_mobile_project = document.getElementById("mobile_project");
  var this_mobile_ed = document.getElementById("mobile_ed");



  // home botton start

  this_homebtn_about.addEventListener("click", function (event) {

    if (sec_home.style.display === "flex") {

      sec_home.classList.add("js_none");
    } else {
      sec_home.classList.remove("js_flex");

    }

    document.querySelector('.background_cirle').style.transform = '';
    document.querySelector('.home_text_container').style.transform = '';
    document.querySelector('.scrolldown').style.visibility = 'visible';

    event.preventDefault();
    sec_about.classList.add("js_block");
    sec_home.classList.add("js_none");
    footer.classList.add("js_block");
    header.classList.add("js_block");
    document.querySelector('header').style.position = 'fixed';
    maintag.classList.add("js_padding_add");
    this_header_about.classList.add("js_color_white")
    this_mobile_about.classList.add("js_color_white")
  });

  this_homebtn_resume.addEventListener("click", function (event) {
    if (sec_home.style.display === "flex") {

      sec_home.classList.add("js_none");
    } else {
      sec_home.classList.remove("js_flex")
    }
    event.preventDefault();
    sec_resume.classList.add("js_block");
    sec_home.classList.add("js_none");
    footer.classList.add("js_block");
    header.classList.add("js_block");
    document.querySelector('header').style.position = 'fixed';
    maintag.classList.add("js_padding_add");
    this_header_resume.classList.add("js_color_white")
    this_mobile_resume.classList.add("js_color_white")
  });

  this_homebtn_contact.addEventListener("click", function (event) {
    if (sec_home.style.display === "flex") {

      sec_home.classList.add("js_none");
    } else {
      sec_home.classList.remove("js_flex")

    }
    event.preventDefault();
    sec_contact_page.classList.add("js_block");
    sec_home.classList.add("js_none");
    footer.classList.add("js_block");
    header.classList.add("js_block");
    document.querySelector('header').style.position = 'fixed';
    maintag.classList.add("js_padding_add");
    this_header_contact.classList.add("js_color_white")
    this_mobile_contact.classList.add("js_color_white")

  });

  this_homebtn_ed.addEventListener("click", function (event) {
    if (sec_home.style.display === "flex") {

      sec_home.classList.add("js_none");
    } else {
      sec_home.classList.remove("js_flex")
    }
    event.preventDefault();
    sec_background_ed.classList.add("js_block");
    sec_home.classList.add("js_none");
    footer.classList.add("js_block");
    header.classList.add("js_block");
    document.querySelector('header').style.position = 'fixed';
    maintag.classList.add("js_padding_add");

    this_header_ed.classList.add("js_color_white");
    this_mobile_ed.classList.add("js_color_white");
  });

  // home button end

  // header button start
  this_header_about.addEventListener("click", function (event) {
    event.preventDefault();
    sec_about.classList.add("js_block");

    this_header_about.classList.add("js_color_white");
    this_header_resume.classList.remove("js_color_white");
    this_header_contact.classList.remove("js_color_white");
    this_header_project.classList.remove("js_color_white");
    this_header_ed.classList.remove("js_color_white");

    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_header_resume.addEventListener("click", function (event) {
    event.preventDefault();
    sec_resume.classList.add("js_block");

    this_header_about.classList.remove("js_color_white");
    this_header_resume.classList.add("js_color_white");
    this_header_contact.classList.remove("js_color_white");
    this_header_project.classList.remove("js_color_white");
    this_header_ed.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_header_contact.addEventListener("click", function (event) {
    event.preventDefault();
    sec_contact_page.classList.add("js_block");

    this_header_about.classList.remove("js_color_white");
    this_header_resume.classList.remove("js_color_white");
    this_header_contact.classList.add("js_color_white");
    this_header_project.classList.remove("js_color_white");
    this_header_ed.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_header_ed.addEventListener("click", function (event) {
    event.preventDefault();
    sec_background_ed.classList.add("js_block");

    this_header_about.classList.remove("js_color_white");
    this_header_resume.classList.remove("js_color_white");
    this_header_ed.classList.add("js_color_white");
    this_header_project.classList.remove("js_color_white");
    this_header_contact.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_header_home.addEventListener("click", function (event) {

    event.preventDefault();
    sec_home.classList.add("js_flex");


    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");

    footer.classList.remove("js_block");
    header.classList.remove("js_block");
    maintag.classList.add("js_padding_remove");
    maintag.classList.remove("js_padding_add");

    this_header_about.classList.remove("js_color_white");
    this_header_resume.classList.remove("js_color_white");
    this_homebtn_contact.classList.remove("js_color_white");
    sec_contact_page.classList.remove("js_color_white");
    this_header_project.classList.remove("js_color_white");
    this_header_ed.classList.remove("js_color_white");

  });

  // header button end

  // mobile button start
  this_mobile_about.addEventListener("click", function (event) {
    event.preventDefault();
    sec_about.classList.add("js_block");

    this_mobile_about.classList.add("js_color_white");
    this_mobile_resume.classList.remove("js_color_white");
    this_mobile_contact.classList.remove("js_color_white");
    this_mobile_project.classList.remove("js_color_white");
    this_mobile_ed.classList.remove("js_color_white");

    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_mobile_resume.addEventListener("click", function (event) {
    event.preventDefault();
    sec_resume.classList.add("js_block");

    this_mobile_about.classList.remove("js_color_white");
    this_mobile_resume.classList.add("js_color_white");
    this_mobile_contact.classList.remove("js_color_white");
    this_mobile_project.classList.remove("js_color_white");
    this_mobile_ed.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_mobile_contact.addEventListener("click", function (event) {
    event.preventDefault();
    sec_contact_page.classList.add("js_block");

    this_mobile_about.classList.remove("js_color_white");
    this_mobile_resume.classList.remove("js_color_white");
    this_mobile_contact.classList.add("js_color_white");
    this_mobile_project.classList.remove("js_color_white");
    this_mobile_ed.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_mobile_ed.addEventListener("click", function (event) {
    event.preventDefault();
    sec_background_ed.classList.add("js_block");

    this_mobile_about.classList.remove("js_color_white");
    this_mobile_resume.classList.remove("js_color_white");
    this_mobile_ed.classList.add("js_color_white");
    this_mobile_project.classList.remove("js_color_white");
    this_mobile_contact.classList.remove("js_color_white");

    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_home.classList.remove("js_flex");

  });

  this_mobile_home.addEventListener("click", function (event) {


    event.preventDefault();
    sec_home.classList.add("js_flex");


    sec_about.classList.remove("js_block");
    sec_resume.classList.remove("js_block");
    sec_contact_page.classList.remove("js_block");
    sec_background_ed.classList.remove("js_block");

    footer.classList.remove("js_block");
    header.classList.remove("js_block");
    maintag.classList.add("js_padding_remove");
    maintag.classList.remove("js_padding_add");

    this_mobile_about.classList.remove("js_color_white");
    this_mobile_resume.classList.remove("js_color_white");
    this_mobile_contact.classList.remove("js_color_white");
    sec_mobile_page.classList.remove("js_color_white");
    this_mobile_project.classList.remove("js_color_white");
    this_mobile_ed.classList.remove("js_color_white");



  });



  // mobile button end

  this_mobile_home.addEventListener("click", function () {

    burger1.classList.toggle("js_hidden");
    burger2.classList.toggle("js_visible");
    burgerContainer.classList.toggle("js_burger_container");
    mobileMenu.classList.toggle("js_mobile_menu");
    barx1.classList.toggle("js_bar-x1");
    barx2.classList.toggle("js_bar-x2");
  });

});


// Smoothly scroll to the top when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
