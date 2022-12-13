const menuLinkList = Array.from(document.querySelectorAll('.menu__link'));
for (let link of menuLinkList) {
    link.onclick = () => {
        const parent = link.closest('.menu__item');
        const menu = parent.querySelector('ul');
        if (menu) {
            const check = document.getElementById('checked');
            if (check && check != menu) {
                check.classList.remove('menu_active');
                check.removeAttribute('id');
            }
            if (menu.classList.contains('menu_active')) {
                menu.classList.remove('menu_active');
            } else {
                menu.classList.add('menu_active');
                menu.setAttribute('id', 'checked');
            }
            return false;
        };
    }
}
