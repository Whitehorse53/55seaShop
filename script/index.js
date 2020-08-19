$(function() {
  $('.head').load('../pages/head.html');
  $('.foot').load('../pages/indexfoot.html');
})
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 3000,
      loop: true,
      setWrapperSize :true,
      autoplay:{
        delay:3000,
        stopOnLastSlide:true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },   
    });
  