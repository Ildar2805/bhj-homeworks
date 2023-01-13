const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const user_id = document.getElementById('user_id');
const exit = document.getElementById('exit');


function auth(id) {
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
    user_id.innerHTML = id;
}

const id = localStorage.getItem('id');
if (id) {
    auth(id);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    const formData = new FormData(form);
    xhr.send(formData);

    xhr.onloadend = function() {
        if (xhr.status == 201) {
            if (xhr.response.success === true) {
                auth(xhr.response.user_id);
                localStorage.setItem('id', xhr.response.user_id);
            } else {
                alert('Неверный логин/пароль');
                form.reset();
            }
        } else {
            alert("Ошибка " + this.status);
            form.reset();
        }
    };
});


exit.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    localStorage.removeItem('id');
    form.reset();
});

