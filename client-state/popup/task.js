function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name+'='));
    return cookie;
}

let name = 'modal';
let value = 'closed';
const modalClose = document.querySelector('.modal__close_times');
const parent = modalClose.closest('.modal');

if (!getCookie(name)) {
    parent.classList.add('modal_active');
}
 
modalClose.addEventListener('click', () => {
    parent.classList.remove('modal_active');
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
});