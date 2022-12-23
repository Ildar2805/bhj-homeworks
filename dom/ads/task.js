const spans = Array.from(document.querySelectorAll('.rotator__case'));
let index = 1;
window.speed = 1000;

function spanChange() {
    spans[index].classList.add('rotator__case_active');
    if (spans[index].previousElementSibling) {
        spans[index].previousElementSibling.classList.remove('rotator__case_active');
    } else {
        spans[spans.length - 1].classList.remove('rotator__case_active');
    }
    const data = spans[index].getAttribute('data-color');
    spans[index].setAttribute('style', `color: ${data}`);
    
    const speed = spans[index].getAttribute('data-speed');
    setTimeout(spanChange, speed);

    index += 1;
    if (index === spans.length) {
        index = 0;
    }
}

setTimeout(() => {
    spanChange();
}, 1000);