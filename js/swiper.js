'use strict';

// var mySwiper = new Swiper ('.swiper-container', {
//     autoplay: {
//         delay: 0,
//         waitForTransition: false,
//     }, 

//     init: true,
//     direction: 'horizontal',
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     calculateHeight: true,
//     loop: true,
//     speed: 10000,
//     freeMode: true,
//     spaceBetween: 0,
//     pagination: '.pagination'
// });

var mySwiper = new Swiper('.swiper-container', {
    init: true,
    direction: 'horizontal',
    loopPreventsSlide: false,
    freeMode: true,
    speed: 6000,
    autoplay: {
      delay: 0,
    },
    slidesPerView: 1.5,
    loop: true,
    spacebetween: 0,
    centeredSlides : true,
    breakpoints: {
        567: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3.5,
        },
        1900: {
            slidesPerView: 4,
            // slidesPerView: auto,
        },
    },
  });
  mySwiper.on('slideChangeTransitionEnd', function(swiper){
    swiper.autoplay.start();
  });
  
  