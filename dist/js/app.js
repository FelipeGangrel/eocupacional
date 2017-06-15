'use strict';

$(document).ready(function () {
  console.log('Ready to rock');

  new WOW().init();

  $('[data-scroll]').on('click', function (event) {
    var rolarPara = $(this).data('scroll');
    console.log(rolarPara);

    if ($(rolarPara)[0]) {
      $('html, body').animate({
        scrollTop: $(rolarPara).offset().top - 60
      }, 1000);
    }

    event.preventDefault();
  });

  $('[menu-toggle]').on('click', function (event) {
    console.log('clicou');
    $('section#navbar .menu').toggleClass('toggle');
    $(this).toggleClass('toggle');
  });

  var posicaoLimiar = $('#sub-start').offset().top;

  $(window).scroll(function (event) {
    if ($(window).scrollTop() > posicaoLimiar) {
      $("#navbar").addClass('toggle');
    } else {
      $("#navbar").removeClass('toggle');
    }
  });
});