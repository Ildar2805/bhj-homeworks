const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = (event.loaded / event.total).toFixed(1);
    }
    xhr.onloadend = function() {
        if (xhr.status == 201) {
          alert("Данные успешно отправлены.");
        } else {
          alert("Ошибка " + this.status);
        }
    };
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
});


