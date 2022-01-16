window.addEventListener('load', () => {
    if (localStorage.length) {
        const items = [];
        items.push(localStorage.getItem('array'));

        items.forEach(item => {
                console.log(item);
            })
            /* const item = document.createElement('div');
            item.classList = 'cart__row';
            item.innerHTML = JSON.parse(items);
            console.log(item);
            const cart = document.querySelector('.cart__inner');
            cart.appendChild(item); */
    }
})