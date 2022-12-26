const interests = Array.from(document.querySelectorAll('.interest'));

for (const interest of interests) {
    if (interest.querySelector('ul')) {
        interest.querySelector('.interest__check').addEventListener('click', () => {
            const nestedCheckboxes = interest.querySelector('ul').querySelectorAll('input');
            for (const checkBox of nestedCheckboxes) {
                checkBox.checked = !checkBox.checked;
            }
        });
    }
}