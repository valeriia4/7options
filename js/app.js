"use strict";

;

(function ($) {
  "use strict";

  $('.main-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true
  });
})(jQuery); //button Up


;

(function ($) {
  "use strict";

  $('.slide-content-text__button').click(function () {
    $(".slide-content__strelki").css("display", "none");
    $(".cont").children().css("display", "none");
    $('.slide-content-text').append('<p class="slide-content-text__result">Wait for the result...</p>');
    setTimeout(function () {
      $('.slide-content div:nth-child(1)').append('<img src="images/Chartnext.svg" class="slide-content__gg">');
    }, 800);
    setTimeout(function () {
      $(".slide-content__chart").css("visibility", "hidden");
    }, 1000);
    setTimeout(function () {
      $(".slide-content-text__result").css("display", "none");
    }, 1500);
    setTimeout(function () {
      $(".slide-content-text-hide").css("display", "block");
    }, 2000);
  });
})(jQuery);

var i = 0;
var image = document.getElementById("image");
var imgs = new Array('images/chart2.svg');

function imgsrc() {
  i++;
  i %= imgs.length;
  image.src = imgs[i];
} //button Down


;

(function ($) {
  "use strict";

  $('.slide-content-text__btn--red').click(function () {
    $(".slide-content__strelki").css("display", "none");
    $(".cont").children().css("display", "none");
    $('.slide-content-text').append('<p class="slide-content-text__result">Wait for the result...</p>');
    setTimeout(function () {
      $('.slide-content div:nth-child(1)').append('<img src="images/Chartnext2.svg" class="slide-content__gg">');
    }, 800);
    setTimeout(function () {
      $(".slide-content__chart").css("visibility", "hidden");
    }, 1000);
    setTimeout(function () {
      $(".slide-content-text__result").css("display", "none");
    }, 1500);
    setTimeout(function () {
      $(".slide-content-text-down").css("display", "block");
    }, 2000);
  });
})(jQuery);

var j = 0;
var image = document.getElementById("image");
var chats = new Array('images/chartdown.svg');

function imgchart() {
  i++;
  i %= chats.length;
  image.src = chats[i];
}

