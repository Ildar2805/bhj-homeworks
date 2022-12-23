const controlsSize = Array.from(document.querySelectorAll('.font-size'));
const controlsColor = Array.from(document.querySelectorAll('.book__control_color a'));
const controlsBg = Array.from(document.querySelectorAll('.book__control_background a'));

const book = document.getElementById('book');

controlsSize.forEach((control) => {
    function onClick(e) {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        control.classList.add('font-size_active');
        const active = document.querySelector('.font-size_active'), 
            index = controlsSize.indexOf(active);
        if (index === 0) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (index === 2) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big' );
        }
        return e.preventDefault();
    }
    control.addEventListener('click', onClick);
});

controlsColor.forEach((control) => {
    function onClick(e) {
        document.querySelector('.color_active').classList.remove('color_active');
        control.classList.add('color_active');
        const active = document.querySelector('.color_active'), 
            index = controlsColor.indexOf(active);
        if (index === 0) {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-whitesmoke', 'book_color-gray');
        } else if (index === 1) {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-black', 'book_color-whitesmoke');
        } else {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-black', 'book_color-gray');
        }
        return e.preventDefault();
    }
    control.addEventListener('click', onClick);
});

controlsBg.forEach((control) => {
    function onClick(e) {
        document.querySelector('.color_active').classList.remove('color_active');
        control.classList.add('color_active');
        const active = document.querySelector('.color_active'), 
            index = controlsBg.indexOf(active);
        if (index === 0) {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-white', 'book_bg-gray');
        } else if (index === 1) {
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-black', 'book_bg-white');
        } else {
            book.classList.add('book_bg-white');
            book.classList.remove('book_bg-black', 'book_bg-gray');
        }
        return e.preventDefault();
    }
    control.addEventListener('click', onClick);
});
