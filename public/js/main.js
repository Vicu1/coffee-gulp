$(function () {
  $('.header__slider').slick({
    arrows : false,
    autoplay : true,
    speed : 1100,
    autoplaySpeed : 6000,
  });
  $('.testimonial__slider').slick({
    speed : 1100,
    prevArrow: '<button type="button" class="testimonial__prevarrow"><img src="../images/testimonial-prevarrow.png" alt="prevArrow"></button>',
    nextArrow: '<button type="button" class="testimonial__nextarrow"><img src="../images/testimonial-nextarrow.png" alt="nextArrow"></button>',
  });
  var mixer = mixitup('.shop__inner,.details__inner' , {
    load: {
      filter: '.all',
  }
  });
  
 
})
