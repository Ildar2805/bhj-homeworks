const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const btnAdd = document.querySelectorAll('.product__add');
let addedId = []

for (let el of quantityControlDec) {
    el.addEventListener('click', () => {
        if (+el.nextElementSibling.textContent !== 0) 
        el.nextElementSibling.textContent = Number(el.nextElementSibling.textContent) - 1; 
    });
}

for (let el of quantityControlInc) {
    el.addEventListener('click', () => {
        el.previousElementSibling.textContent = Number(el.previousElementSibling.textContent) + 1;
    });
}

function productAdd(btn) {
    const {id} = btn.closest('.product').dataset;
    const count = btn.previousElementSibling.querySelector('.product__quantity-value').textContent;
    if (addedId.includes(id)) {
        const product = document.querySelector(`[data-id='${id}']`);
        product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + Number(count)
    } else {
        let product = document.createElement('div');
        product.className = 'cart__product';
        product.dataset.id = id;
        addedId.push(id);

        const productCount = document.createElement('div');
        productCount.className = 'cart__product-count';
        productCount.textContent = count;
    
        const img = btn.closest('.product').querySelector('.product__image').cloneNode(false);
        img.className = 'cart__product-image';

        product.appendChild(productCount);
        product.appendChild(img);

        let list = document.querySelector('.cart__products');
        list.appendChild(product);
    }
}

for (let btn of btnAdd) {
    btn.addEventListener('click', () => {
        if (+btn.previousElementSibling.querySelector('.product__quantity-value').textContent > 0) {
            productAdd(btn);
        }
    });
}

