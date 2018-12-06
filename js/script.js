"use strict";

$(document).ready(function () {
  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: function offset(anchor, toggle) {
      return 93;
    }
  }); //Object-fit polyfill

  $(function () {
    objectFitImages('.about__grid-photo');
  }); // burger menu

  $('.menu-btn').click(function () {
    var body = document.body;
    $(this).toggleClass('menu-btn--active');
    $('.nav').toggleClass('nav--open');
    $(body).toggleClass('blocked');
  }); // photos slider

  $('.photos__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.photos__prev'),
    nextArrow: $('.photos__next'),
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1100,
      settings: {
        dots: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 1400,
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3
      }
    }]
  }); // Partners slider

  $('.partners__list').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    }]
  }); // Button show more in Videos section

  $('.btn--more').click(function () {
    $('.video__more').slideToggle();
    var text = $(this).text();
    $(this).text(text == 'Посмотреть больше' ? 'Скрыть видео' : 'Посмотреть больше');
  });
});