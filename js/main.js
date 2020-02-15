$(document).ready(() => {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    arrows: false,
    draggable: false,
    fade: true
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '15px',
    prevArrow: '<span class="icon-angle-left"><i class="icon-left"></i></span>',
    nextArrow: '<span class="icon-angle-right"><i class="icon-right"></i></span>'
  });
});

$(document).ready(() => {
  $('.slider-case').slick({
    arrows: false,
    dots: true
  });
});

$(document).ready(() => {
  var $page = $('html, body');
  $('.header-list__link').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 78.5
    }, 1000);
    return false;
  });
});

$(document).ready(() => {
  $(window).on('scroll', function () {
    var $nav = $('.main-header'),
      scroll = window.scrollY;
    if (scroll > 50) {
      $nav.addClass('main-header_change-color');
    } else {
      $nav.removeClass('main-header_change-color');
    }
  });
});

(function (btn) {
  for (let value of btn)
    value.onclick = function () {
      document.getElementById("resp-menu").checked = false;
    };
})(document.querySelectorAll(".header-list__link"));

(function setup_for_width(mql) {
  if (mql.matches) {
    document.querySelector("#resp-menu").checked = false;
  }
  mql.addListener(setup_for_width);
})(window.matchMedia("screen and (min-width: 800px)"));

$(".adress-location__btn-map").on('click', function () {

  $.fancybox.open({
    src: 'https://www.google.com/maps/d/u/0/embed?mid=10yxpK387xlKBnnUGll_qHA9QxTi5IZpP',
    type: 'iframe',
    iframe: {
      preload: false
    }
  })
});