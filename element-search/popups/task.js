const listTimes = Array.from(document.querySelectorAll('.modal__close_times'));
listTimes.forEach((times) => {
    times.onclick = () => {
        const parent = times.closest('.modal');
        parent.classList.remove('modal_active');
    };
});

const button = document.querySelector('.show-success'),
      main = document.getElementById('modal_main'),
      success = document.getElementById('modal_success');

button.onclick = () => {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
};



