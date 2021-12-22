$(function () {
  $('.header__slider').slick({
    arrows: false,
    autoplay: true,
    speed: 1100,
    autoplaySpeed: 6000,
  });
  $('.testimonial__slider').slick({
    speed: 1100,
    prevArrow: '<button type="button" class="testimonial__prevarrow"><img src="../images/testimonial-prevarrow.png" alt="prevArrow"></button>',
    nextArrow: '<button type="button" class="testimonial__nextarrow"><img src="../images/testimonial-nextarrow.png" alt="nextArrow"></button>',
  });
  var mixer = mixitup('.shop__inner,.details__inner', {
    load: {
      filter: '.all',
    }
  });



})
$(".burger").on("click", function () {
  $(".header__nav-list").toggleClass("header__nav--active");
  $(".burger").toggleClass("burger--active");
});

const button = document.querySelectorAll('.remove');
const rows = document.querySelectorAll('.cart__row');
for (let i of button) {
  i.addEventListener('click', () => {
    const parent = i.parentNode;
    parent.remove(parent);

  })
}
/* if () {
  const text = document.createElement('h1');
  text.textContent = `The cart is empty`;
  const inner = document.querySelector('.cart__inner');
  inner.appendChild(text);
} */

