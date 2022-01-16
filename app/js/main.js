$(function() {
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
$(".burger").on("click", function() {
    $(".header__nav-list").toggleClass("header__nav--active");
    $(".burger").toggleClass("burger--active");
});



const cartBtns = document.querySelectorAll('.shop__item-cart');
const styleElem = document.head.appendChild(document.createElement("style"));

const newRow = (title) => {
    return `
          <div class="cart__item">
              <img src="images/cart-${title}.png" alt="${title}">
          </div>
          <div class="cart__item">
              <h5>${title}</h5>
          </div>
          <div class="cart__item">
              <h5>5$</h5>
          </div>
          <div class="cart__item">
              <h5>1</h5>
          </div>
          <div class="cart__item">
              <h5>5$</h5>
          </div>
          <button class="remove">
              <img src="images/remove.png" alt="remove">
          </button>
    
        `
}

let arr = [];

const insertItems = (title) => {
    const item = document.createElement('div');
    item.classList = 'cart__row';
    item.innerHTML = newRow(title);
    arr.push(item.innerHTML);
}

for (const item of cartBtns) {
    item.addEventListener('click', () => {
        styleElem.innerHTML = ".header__cart::after {position:absolute}";
        const title = item.parentElement.parentElement.querySelector('.shop__item-title').innerHTML;
        switch (title) {
            case 'Cappuccino':
                insertItems(title);
                localStorage.setItem('array', arr);
                break;
            case 'Latte':
                insertItems(title);
                break;
            case 'Pink Donut':
                insertItems(title);
                break;
            case 'Bread Sandwich':
                console.log('privet');
                break;
            case 'Espresso':
                console.log('privet');
                break;
            case 'Panini':
                console.log('privet');
                break;
            case 'Black Tea':
                console.log('privet');
                break;
            case 'Royal Donut':
                console.log('privet');
                break;
            case 'Green Tea':
                console.log('privet');
                break;
        }

    })
}
const cart = document.querySelector('.cart__inner');