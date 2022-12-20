const dd = Array.from(document.querySelectorAll('.dropdown'));



dd.forEach((dropdown) => {
    dropdown.onclick = () => {
        const ddList = dropdown.querySelector('.dropdown__list');
        if (ddList.classList.contains('dropdown__list_active')) {
            ddList.classList.remove('dropdown__list_active');
        } else {
            ddList.classList.add('dropdown__list_active');
        }
    };

    const ddItems = Array.from(dropdown.querySelectorAll('.dropdown__item'));
    ddItems.forEach((item) => {
        item.onclick = () => {
            const ddValue = dropdown.querySelector('.dropdown__value');
            ddValue.textContent = item.querySelector('a').textContent;
            return false;
        };
    });
}); 
