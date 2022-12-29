$(document).ready(function(){
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

$(document).on('turbolinks:load', function() {
//Swiperのオプションを定数化
  const subSwiper = new Swiper('.sub-swiper', {
    loop: true,
    speed: 1000,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    speed: 1000,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: subSwiper,
    },
  });
});