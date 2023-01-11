const xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
let items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');
    }
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function() {
    const parseData = JSON.parse(xhr.response);
    console.log(parseData)
    for (let key in parseData.response.Valute) {
        let code = document.createElement('div');
        code.innerHTML = parseData.response.Valute[key].CharCode;
        code.className = 'item__code';

        let value = document.createElement('div');
        value.innerHTML = parseData.response.Valute[key].Value;
        value.className = 'item__value';

        let currency = document.createElement('div');
        currency.innerHTML = 'руб.';
        currency.className = 'item__currency';

        let item = document.createElement('div');
        item.className = 'item';
        item.appendChild(code);
        item.appendChild(value);
        item.appendChild(currency);

        items.appendChild(item);
    };
    
}

 