const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.OPENED) {
            progress.value = 0.25;
        } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
            progress.value = 0.5;
        } else if (xhr.readyState === xhr.LOADING) {
            progress.value = 0.75;
        } else if (xhr.readyState === xhr.DONE) {
            progress.value = 1;
        }
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
})


