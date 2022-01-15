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

/* const button = document.querySelectorAll('.remove');
const rows = document.querySelectorAll('.cart__row');


for (let i of button) {
    i.addEventListener('click', () => {
        const parent = i.parentNode;
        parent.remove(parent);
    })
}

 */
const cartBtns = document.querySelectorAll('.shop__item-cart');
const styleElem = document.head.appendChild(document.createElement("style"));

const newRow = (title) => {
    return `
        <div class="cart__row">
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
            /button>
        </div>
      `
}

let arr = [];




for (const item of cartBtns) {
    item.addEventListener('click', () => {
        styleElem.innerHTML = ".header__cart::after {position:absolute}";
        const title = item.parentElement.parentElement.querySelector('.shop__item-title').innerHTML;
        switch (title) {
            case 'Cappuccino':

                break;
            case 'Latte':
                console.log('privet');
                break;
            case 'Pink Donut':
                console.log('privet');
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