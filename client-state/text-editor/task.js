const save = document.getElementById('save');
const clear = document.getElementById('clear');
const textarea = document.getElementById('editor');


if (localStorage.getItem('text')) {
    textarea.value = localStorage.getItem('text');
} else {
    textarea.placeholder = 'Введите текст';
}

textarea.addEventListener('keyup', () => {
    const text = textarea.value;
    localStorage.setItem('text', text);
});

clear.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('text');
});







