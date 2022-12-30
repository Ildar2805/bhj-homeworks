const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (!el.nextElementSibling || !el.nextElementSibling.classList.contains('tooltip')) {
            const {top, left} = el.getBoundingClientRect();
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.title;
            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top + 20}px`;

            el.insertAdjacentElement('afterend', tooltip);
        }

        const active = document.querySelector('.tooltip_active');
        if (active && active !== el.nextElementSibling) {
            active.classList.remove('tooltip_active');
            el.nextElementSibling.classList.toggle('tooltip_active');
        } else {
            el.nextElementSibling.classList.toggle('tooltip_active');
        }
        
        e.preventDefault();
    });
});