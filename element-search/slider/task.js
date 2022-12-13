const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
const itemList = Array.from(document.querySelectorAll('.slider__item'));
const length =  document.querySelectorAll('.slider__item').length - 1;
let index = 0;
for (let arrow of sliderArrows) {
    arrow.onclick = () => {
        itemList[index].classList.remove('slider__item_active');
        if (arrow.classList.contains('slider__arrow_prev')) {
            index -= 1;
            if (index < 0) {
                index = length;
            }
        } else {
            index += 1;
            if (index > length) {
                index = 0;
            }
        }
        itemList[index].classList.add('slider__item_active');
    };
}

const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
sliderDots.forEach((slider, index) => {
    let ind = index;
    slider.onclick = () => {
        for (let item of itemList){
            item.classList.remove('slider__item_active');
        }
        itemList[ind].classList.add('slider__item_active');
    };
});