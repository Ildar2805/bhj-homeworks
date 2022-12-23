const neededDiv = document.querySelector('.reveal');

function isVisible(e) {
    const {top, bottom} = e.getBoundingClientRect();
    if (bottom < 0) {
        return e.classList.remove('reveal_active');
    }
    if (top > window.innerHeight) {
        return e.classList.remove('reveal_active');
    }
    return e.classList.add('reveal_active');
}

document.addEventListener('scroll', () => {
    isVisible(neededDiv);
});

